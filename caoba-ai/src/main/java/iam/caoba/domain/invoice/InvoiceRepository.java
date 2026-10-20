package iam.caoba.domain.invoice;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public class InvoiceRepository {

    private final JdbcTemplate jdbc;

    private final RowMapper<Invoice> invoiceMapper = (rs, rowNum) -> Invoice.builder()
            .id(rs.getLong("id"))
            .userId(rs.getLong("user_id"))
            .invoiceNumber(rs.getString("invoice_number"))
            .clientName(rs.getString("client_name"))
            .clientEmail(rs.getString("client_email"))
            .status(Invoice.Status.valueOf(rs.getString("status")))
            .subtotal(rs.getBigDecimal("subtotal"))
            .discount(rs.getBigDecimal("discount"))
            .tax(rs.getBigDecimal("tax"))
            .total(rs.getBigDecimal("total"))
            .currency(rs.getString("currency"))
            .dueDate(rs.getTimestamp("due_date") != null ? rs.getTimestamp("due_date").toLocalDateTime().toLocalDate() : null)
            .notes(rs.getString("notes"))
            .template(rs.getString("template"))
            .issueDate(rs.getTimestamp("issue_date") != null ? rs.getTimestamp("issue_date").toLocalDateTime().toLocalDate() : null)
            .clientCode(rs.getString("client_code"))
            .clientAddress(rs.getString("client_address"))
            .tags(rs.getString("tags"))
            .terms(rs.getString("terms"))
            .memo(rs.getString("memo"))
            .kind(rs.getString("kind") != null ? Invoice.Kind.valueOf(rs.getString("kind")) : Invoice.Kind.INVOICE)
            .archived(rs.getBoolean("is_archived"))
            .deleted(rs.getBoolean("is_deleted"))
            .createdAt(rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null)
            .updatedAt(rs.getTimestamp("updated_at") != null ? rs.getTimestamp("updated_at").toLocalDateTime() : null)
            .build();

    private final RowMapper<InvoiceItem> itemMapper = (rs, rowNum) -> InvoiceItem.builder()
            .id(rs.getLong("id"))
            .invoiceId(rs.getLong("invoice_id"))
            .title(rs.getString("title"))
            .description(rs.getString("description"))
            .quantity(rs.getInt("quantity"))
            .unitPrice(rs.getBigDecimal("unit_price"))
            .discount(rs.getBigDecimal("discount"))
            .discountType(rs.getString("discount_type"))
            .amount(rs.getBigDecimal("amount"))
            .build();

    public InvoiceRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    // ── Invoice Queries ──

    public List<Invoice> findByUserId(Long userId) {
        return jdbc.query(
                "SELECT * FROM invoices WHERE user_id = ? AND is_deleted = FALSE ORDER BY created_at DESC",
                invoiceMapper, userId);
    }

    public List<Invoice> findArchived(Long userId) {
        return jdbc.query(
                "SELECT * FROM invoices WHERE user_id = ? AND is_archived = TRUE AND is_deleted = FALSE ORDER BY created_at DESC",
                invoiceMapper, userId);
    }

    public List<Invoice> findDeleted(Long userId) {
        return jdbc.query(
                "SELECT * FROM invoices WHERE user_id = ? AND is_deleted = TRUE ORDER BY created_at DESC",
                invoiceMapper, userId);
    }

    public List<Invoice> findPending(Long userId) {
        return jdbc.query(
                "SELECT * FROM invoices WHERE user_id = ? AND is_deleted = FALSE AND status IN ('DRAFT','OVERDUE') ORDER BY created_at DESC",
                invoiceMapper, userId);
    }

    public List<Invoice> findByStatus(Long userId, Invoice.Status status) {
        return jdbc.query("SELECT * FROM invoices WHERE user_id = ? AND status = ? AND is_deleted = FALSE ORDER BY created_at DESC",
                invoiceMapper, userId, status.name());
    }

    public Optional<Invoice> findById(Long id) {
        List<Invoice> list = jdbc.query("SELECT * FROM invoices WHERE id = ?", invoiceMapper, id);
        return list.stream().findFirst();
    }

    public Long insert(Invoice invoice) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO invoices (user_id, invoice_number, client_name, client_email, status, subtotal, discount, tax, total, currency, due_date, notes, template, issue_date, client_code, client_address, tags, terms, memo, kind, is_archived, is_deleted, created_at, updated_at) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    Statement.RETURN_GENERATED_KEYS
            );
            ps.setLong(1, invoice.getUserId());
            ps.setString(2, invoice.getInvoiceNumber());
            ps.setString(3, invoice.getClientName());
            ps.setString(4, invoice.getClientEmail());
            ps.setString(5, invoice.getStatus().name());
            ps.setBigDecimal(6, invoice.getSubtotal());
            ps.setBigDecimal(7, invoice.getDiscount());
            ps.setBigDecimal(8, invoice.getTax());
            ps.setBigDecimal(9, invoice.getTotal());
            ps.setString(10, invoice.getCurrency());
            ps.setTimestamp(11, invoice.getDueDate() != null ? Timestamp.valueOf(invoice.getDueDate().atStartOfDay()) : null);
            ps.setString(12, invoice.getNotes());
            ps.setString(13, invoice.getTemplate());
            ps.setTimestamp(14, invoice.getIssueDate() != null ? Timestamp.valueOf(invoice.getIssueDate().atStartOfDay()) : null);
            ps.setString(15, invoice.getClientCode());
            ps.setString(16, invoice.getClientAddress());
            ps.setString(17, invoice.getTags());
            ps.setString(18, invoice.getTerms());
            ps.setString(19, invoice.getMemo());
            ps.setString(20, invoice.getKind() != null ? invoice.getKind().name() : Invoice.Kind.INVOICE.name());
            ps.setBoolean(21, invoice.isArchived());
            ps.setBoolean(22, invoice.isDeleted());
            ps.setTimestamp(23, invoice.getCreatedAt() != null ? Timestamp.valueOf(invoice.getCreatedAt()) : Timestamp.valueOf(LocalDateTime.now()));
            ps.setTimestamp(24, invoice.getUpdatedAt() != null ? Timestamp.valueOf(invoice.getUpdatedAt()) : Timestamp.valueOf(LocalDateTime.now()));
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int update(Invoice invoice) {
        return jdbc.update(
                "UPDATE invoices SET invoice_number=?, client_name=?, client_email=?, status=?, subtotal=?, discount=?, tax=?, total=?, currency=?, due_date=?, notes=?, template=?, issue_date=?, client_code=?, client_address=?, tags=?, terms=?, memo=?, kind=?, updated_at=? WHERE id=?",
                invoice.getInvoiceNumber(), invoice.getClientName(), invoice.getClientEmail(), invoice.getStatus().name(),
                invoice.getSubtotal(), invoice.getDiscount(), invoice.getTax(), invoice.getTotal(),
                invoice.getCurrency(), invoice.getDueDate() != null ? Timestamp.valueOf(invoice.getDueDate().atStartOfDay()) : null,
                invoice.getNotes(), invoice.getTemplate(),
                invoice.getIssueDate() != null ? Timestamp.valueOf(invoice.getIssueDate().atStartOfDay()) : null,
                invoice.getClientCode(), invoice.getClientAddress(), invoice.getTags(), invoice.getTerms(), invoice.getMemo(),
                invoice.getKind() != null ? invoice.getKind().name() : Invoice.Kind.INVOICE.name(),
                Timestamp.valueOf(LocalDateTime.now()), invoice.getId()
        );
    }

    public int updateStatus(Long id, Invoice.Status status) {
        return jdbc.update("UPDATE invoices SET status=?, updated_at=? WHERE id=?",
                status.name(), Timestamp.valueOf(LocalDateTime.now()), id);
    }

    public int setArchived(Long id, boolean archived) {
        return jdbc.update("UPDATE invoices SET is_archived=?, updated_at=? WHERE id=?",
                archived, Timestamp.valueOf(LocalDateTime.now()), id);
    }

    public int setDeleted(Long id, boolean deleted) {
        return jdbc.update("UPDATE invoices SET is_deleted=?, updated_at=? WHERE id=?",
                deleted, Timestamp.valueOf(LocalDateTime.now()), id);
    }

    public int deleteById(Long id) {
        jdbc.update("DELETE FROM invoice_items WHERE invoice_id = ?", id);
        return jdbc.update("DELETE FROM invoices WHERE id = ?", id);
    }

    // ── Invoice Items ──

    public List<InvoiceItem> findItemsByInvoiceId(Long invoiceId) {
        return jdbc.query("SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY id", itemMapper, invoiceId);
    }

    public Long insertItem(InvoiceItem item) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO invoice_items (invoice_id, title, description, quantity, unit_price, discount, discount_type, amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                    Statement.RETURN_GENERATED_KEYS
            );
            ps.setLong(1, item.getInvoiceId());
            ps.setString(2, item.getTitle());
            ps.setString(3, item.getDescription());
            ps.setInt(4, item.getQuantity() != null ? item.getQuantity() : 1);
            ps.setBigDecimal(5, item.getUnitPrice() != null ? item.getUnitPrice() : java.math.BigDecimal.ZERO);
            ps.setBigDecimal(6, item.getDiscount() != null ? item.getDiscount() : java.math.BigDecimal.ZERO);
            ps.setString(7, item.getDiscountType() != null ? item.getDiscountType() : "per");
            ps.setBigDecimal(8, item.getAmount() != null ? item.getAmount() : java.math.BigDecimal.ZERO);
            return ps;
        }, keyHolder);
        return keyHolder.getKey().longValue();
    }

    public int updateItem(InvoiceItem item) {
        return jdbc.update(
                "UPDATE invoice_items SET title=?, description=?, quantity=?, unit_price=?, discount=?, discount_type=?, amount=? WHERE id=?",
                item.getTitle(), item.getDescription(), item.getQuantity(), item.getUnitPrice(),
                item.getDiscount(), item.getDiscountType(), item.getAmount(), item.getId()
        );
    }

    public int deleteItem(Long itemId) {
        return jdbc.update("DELETE FROM invoice_items WHERE id = ?", itemId);
    }

    public int deleteItemsByInvoiceId(Long invoiceId) {
        return jdbc.update("DELETE FROM invoice_items WHERE invoice_id = ?", invoiceId);
    }

    public Optional<InvoiceItem> findItemById(Long itemId) {
        List<InvoiceItem> list = jdbc.query("SELECT * FROM invoice_items WHERE id = ?", itemMapper, itemId);
        return list.stream().findFirst();
    }
}