package iam.caoba.domain.invoice;

import iam.caoba.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {

    private final InvoiceService invoiceService;

    /**
     * 鏌ヨ褰撳墠鐢ㄦ埛鐨勫彂绁紝鏀寔瑙嗗浘绛涢€?     * GET /api/invoices?filter=all|sent|archived|pending|deleted
     */
    @GetMapping
    public ApiResponse<List<Invoice>> list(
            @RequestAttribute("userId") Long userId,
            @RequestParam(value = "filter", required = false) String filter,
            @RequestParam(value = "status", required = false) Invoice.Status status) {
        if (filter != null) {
            switch (filter.toLowerCase()) {
                case "sent":
                    return ApiResponse.ok(invoiceService.listByStatus(userId, Invoice.Status.SENT));
                case "paid":
                    return ApiResponse.ok(invoiceService.listByStatus(userId, Invoice.Status.PAID));
                case "archived":
                    return ApiResponse.ok(invoiceService.listArchived(userId));
                case "pending":
                    return ApiResponse.ok(invoiceService.listPending(userId));
                case "deleted":
                    return ApiResponse.ok(invoiceService.listDeleted(userId));
                default:
                    return ApiResponse.ok(invoiceService.listByUser(userId));
            }
        }
        if (status != null) {
            return ApiResponse.ok(invoiceService.listByStatus(userId, status));
        }
        return ApiResponse.ok(invoiceService.listByUser(userId));
    }

    @PostMapping
    public ApiResponse<Invoice> create(@RequestAttribute("userId") Long userId, @RequestBody Invoice invoice) {
        invoice.setUserId(userId);
        return ApiResponse.ok("发票已创建", invoiceService.create(invoice));
    }

    @GetMapping("/{id}")
    public ApiResponse<Invoice> getById(@PathVariable Long id) {
        return ApiResponse.ok(invoiceService.getById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<Invoice> update(@PathVariable Long id, @RequestBody Invoice invoice) {
        return ApiResponse.ok("发票已更新", invoiceService.update(id, invoice));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        invoiceService.delete(id);
        return ApiResponse.ok("发票已删除", null);
    }

    @PutMapping("/{id}/status")
    public ApiResponse<Invoice> changeStatus(
            @PathVariable Long id,
            @RequestParam Invoice.Status status) {
        return ApiResponse.ok("鐘舵€佸凡鏇存柊", invoiceService.changeStatus(id, status));
    }

    /** 褰掓。 */
    @PutMapping("/{id}/archive")
    public ApiResponse<Invoice> archive(@PathVariable Long id) {
        return ApiResponse.ok("已归档", invoiceService.archive(id));
    }

    /** 鍙栨秷褰掓。 */
    @PutMapping("/{id}/restore")
    public ApiResponse<Invoice> restoreFromArchive(@PathVariable Long id) {
        return ApiResponse.ok("已取消归档", invoiceService.restoreFromArchive(id));
    }

    /** 绉诲叆鍥炴敹绔欙紙杞垹闄わ級 */
    @PutMapping("/{id}/trash")
    public ApiResponse<Invoice> trash(@PathVariable Long id) {
        return ApiResponse.ok("宸茬Щ鍏ュ洖鏀剁珯", invoiceService.softDelete(id));
    }

    /** 浠庡洖鏀剁珯鎭㈠ */
    @PutMapping("/{id}/restore-trash")
    public ApiResponse<Invoice> restoreFromTrash(@PathVariable Long id) {
        return ApiResponse.ok("已恢复", invoiceService.restoreFromTrash(id));
    }

    // 鈹€鈹€ Invoice Items 鈹€鈹€

    @GetMapping("/{id}/items")
    public ApiResponse<List<InvoiceItem>> listItems(@PathVariable Long id) {
        return ApiResponse.ok(invoiceService.listItems(id));
    }

    @PostMapping("/{id}/items")
    public ApiResponse<InvoiceItem> addItem(@PathVariable Long id, @RequestBody InvoiceItem item) {
        return ApiResponse.ok("项目已添加", invoiceService.addItem(id, item));
    }

    @PutMapping("/{invoiceId}/items/{itemId}")
    public ApiResponse<InvoiceItem> updateItem(@PathVariable Long invoiceId, @PathVariable Long itemId, @RequestBody InvoiceItem item) {
        return ApiResponse.ok("项目已更新", invoiceService.updateItem(itemId, item));
    }

    @PutMapping("/items/{itemId}")
    public ApiResponse<InvoiceItem> updateItemLegacy(@PathVariable Long itemId, @RequestBody InvoiceItem item) {
        return ApiResponse.ok("项目已更新", invoiceService.updateItem(itemId, item));
    }

    @DeleteMapping("/{invoiceId}/items/{itemId}")
    public ApiResponse<Void> deleteItem(@PathVariable Long invoiceId, @PathVariable Long itemId) {
        invoiceService.deleteItem(itemId);
        return ApiResponse.ok("项目已删除", null);
    }

    @DeleteMapping("/items/{itemId}")
    public ApiResponse<Void> deleteItemLegacy(@PathVariable Long itemId) {
        invoiceService.deleteItem(itemId);
        return ApiResponse.ok("项目已删除", null);
    }
}