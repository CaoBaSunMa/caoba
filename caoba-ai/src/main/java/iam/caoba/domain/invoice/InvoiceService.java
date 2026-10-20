package iam.caoba.domain.invoice;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;

    public List<Invoice> listByUser(Long userId) {
        return invoiceRepository.findByUserId(userId);
    }

    public List<Invoice> listArchived(Long userId) {
        return invoiceRepository.findArchived(userId);
    }

    public List<Invoice> listDeleted(Long userId) {
        return invoiceRepository.findDeleted(userId);
    }

    public List<Invoice> listPending(Long userId) {
        return invoiceRepository.findPending(userId);
    }

    public List<Invoice> listByStatus(Long userId, Invoice.Status status) {
        return invoiceRepository.findByStatus(userId, status);
    }

    public Invoice getById(Long id) {
        return invoiceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Invoice not found: " + id));
    }

    public Invoice create(Invoice invoice) {
        if (invoice.getStatus() == null) {
            invoice.setStatus(Invoice.Status.DRAFT);
        }
        if (invoice.getCurrency() == null) {
            invoice.setCurrency("CNY");
        }
        if (invoice.getKind() == null) {
            invoice.setKind(Invoice.Kind.INVOICE);
        }
        if (invoice.getSubtotal() == null) invoice.setSubtotal(BigDecimal.ZERO);
        if (invoice.getDiscount() == null) invoice.setDiscount(BigDecimal.ZERO);
        if (invoice.getTax() == null) invoice.setTax(BigDecimal.ZERO);
        recalculate(invoice);
        invoice.setCreatedAt(LocalDateTime.now());
        invoice.setUpdatedAt(LocalDateTime.now());
        Long id = invoiceRepository.insert(invoice);
        invoice.setId(id);
        return invoice;
    }

    public Invoice update(Long id, Invoice updates) {
        Invoice existing = getById(id);
        if (updates.getInvoiceNumber() != null) existing.setInvoiceNumber(updates.getInvoiceNumber());
        if (updates.getClientName() != null) existing.setClientName(updates.getClientName());
        if (updates.getClientEmail() != null) existing.setClientEmail(updates.getClientEmail());
        if (updates.getSubtotal() != null) existing.setSubtotal(updates.getSubtotal());
        if (updates.getDiscount() != null) existing.setDiscount(updates.getDiscount());
        if (updates.getTax() != null) existing.setTax(updates.getTax());
        if (updates.getCurrency() != null) existing.setCurrency(updates.getCurrency());
        if (updates.getDueDate() != null) existing.setDueDate(updates.getDueDate());
        if (updates.getNotes() != null) existing.setNotes(updates.getNotes());
        if (updates.getTemplate() != null) existing.setTemplate(updates.getTemplate());
        if (updates.getIssueDate() != null) existing.setIssueDate(updates.getIssueDate());
        if (updates.getClientCode() != null) existing.setClientCode(updates.getClientCode());
        if (updates.getClientAddress() != null) existing.setClientAddress(updates.getClientAddress());
        if (updates.getTags() != null) existing.setTags(updates.getTags());
        if (updates.getTerms() != null) existing.setTerms(updates.getTerms());
        if (updates.getMemo() != null) existing.setMemo(updates.getMemo());
        if (updates.getKind() != null) existing.setKind(updates.getKind());
        recalculate(existing);
        existing.setUpdatedAt(LocalDateTime.now());
        invoiceRepository.update(existing);
        return existing;
    }

    public Invoice changeStatus(Long id, Invoice.Status status) {
        Invoice invoice = getById(id);
        invoice.setStatus(status);
        invoice.setUpdatedAt(LocalDateTime.now());
        invoiceRepository.updateStatus(id, status);
        return invoice;
    }

    public Invoice archive(Long id) {
        Invoice invoice = getById(id);
        invoice.setArchived(true);
        invoiceRepository.setArchived(id, true);
        return invoice;
    }

    public Invoice restoreFromArchive(Long id) {
        Invoice invoice = getById(id);
        invoice.setArchived(false);
        invoiceRepository.setArchived(id, false);
        return invoice;
    }

    public Invoice softDelete(Long id) {
        Invoice invoice = getById(id);
        invoice.setDeleted(true);
        invoice.setArchived(false);
        invoiceRepository.setDeleted(id, true);
        invoiceRepository.setArchived(id, false);
        return invoice;
    }

    public Invoice restoreFromTrash(Long id) {
        Invoice invoice = getById(id);
        invoice.setDeleted(false);
        invoiceRepository.setDeleted(id, false);
        return invoice;
    }

    public void delete(Long id) {
        invoiceRepository.deleteById(id);
    }

    // ── Items ──

    public List<InvoiceItem> listItems(Long invoiceId) {
        return invoiceRepository.findItemsByInvoiceId(invoiceId);
    }

    public InvoiceItem addItem(Long invoiceId, InvoiceItem item) {
        item.setInvoiceId(invoiceId);
        if (item.getQuantity() == null) item.setQuantity(1);
        if (item.getUnitPrice() == null) item.setUnitPrice(BigDecimal.ZERO);
        if (item.getDiscount() == null) item.setDiscount(BigDecimal.ZERO);
        if (item.getDiscountType() == null) item.setDiscountType("per");
        item.setAmount(calcLineAmount(item));
        Long id = invoiceRepository.insertItem(item);
        item.setId(id);
        recalculateInvoiceTotals(invoiceId);
        return item;
    }

    public InvoiceItem updateItem(Long itemId, InvoiceItem updates) {
        InvoiceItem item = findItemById(itemId);
        if (updates.getTitle() != null) item.setTitle(updates.getTitle());
        if (updates.getDescription() != null) item.setDescription(updates.getDescription());
        if (updates.getQuantity() != null) item.setQuantity(updates.getQuantity());
        if (updates.getUnitPrice() != null) item.setUnitPrice(updates.getUnitPrice());
        if (updates.getDiscount() != null) item.setDiscount(updates.getDiscount());
        if (updates.getDiscountType() != null) item.setDiscountType(updates.getDiscountType());
        item.setAmount(calcLineAmount(item));
        invoiceRepository.updateItem(item);
        recalculateInvoiceTotals(item.getInvoiceId());
        return item;
    }

    public void deleteItem(Long itemId) {
        InvoiceItem item = findItemById(itemId);
        Long invoiceId = item.getInvoiceId();
        invoiceRepository.deleteItem(itemId);
        recalculateInvoiceTotals(invoiceId);
    }

    private InvoiceItem findItemById(Long itemId) {
        return invoiceRepository.findItemById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("Invoice item not found: " + itemId));
    }

    // ── Calculations ──

    private BigDecimal calcLineAmount(InvoiceItem item) {
        BigDecimal price = item.getUnitPrice() == null ? BigDecimal.ZERO : item.getUnitPrice();
        int qty = item.getQuantity() == null ? 1 : item.getQuantity();
        BigDecimal gross = price.multiply(BigDecimal.valueOf(qty));
        BigDecimal disc = item.getDiscount() == null ? BigDecimal.ZERO : item.getDiscount();
        if ("cur".equals(item.getDiscountType())) {
            return gross.subtract(disc).max(BigDecimal.ZERO).setScale(2, RoundingMode.HALF_UP);
        }
        // per = percent of the gross
        BigDecimal discAmt = gross.multiply(disc).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        return gross.subtract(discAmt).max(BigDecimal.ZERO).setScale(2, RoundingMode.HALF_UP);
    }

    private void recalculateInvoiceTotals(Long invoiceId) {
        List<InvoiceItem> items = invoiceRepository.findItemsByInvoiceId(invoiceId);
        BigDecimal subtotal = items.stream()
                .map(InvoiceItem::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        Invoice invoice = getById(invoiceId);
        invoice.setSubtotal(subtotal);
        recalculate(invoice);
        invoice.setUpdatedAt(LocalDateTime.now());
        invoiceRepository.update(invoice);
    }

    private void recalculate(Invoice invoice) {
        BigDecimal sub = invoice.getSubtotal() == null ? BigDecimal.ZERO : invoice.getSubtotal();
        BigDecimal disc = invoice.getDiscount() == null ? BigDecimal.ZERO : invoice.getDiscount();
        BigDecimal tax = invoice.getTax() == null ? BigDecimal.ZERO : invoice.getTax();
        BigDecimal afterDiscount = sub.subtract(disc);
        BigDecimal taxAmount = afterDiscount.multiply(tax).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        invoice.setTotal(afterDiscount.add(taxAmount));
    }
}