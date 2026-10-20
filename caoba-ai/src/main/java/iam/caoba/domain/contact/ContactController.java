package iam.caoba.domain.contact;

import iam.caoba.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contacts")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    /**
     * 鏌ヨ褰撳墠鐢ㄦ埛鐨勮仈绯讳汉锛屾敮鎸佺瓫閫?     * GET /api/contacts?filter=all|starred|archived
     */
    @GetMapping
    public ApiResponse<List<Contact>> list(
            @RequestAttribute("userId") Long userId,
            @RequestParam(name = "filter", required = false) String filter) {
        if ("starred".equalsIgnoreCase(filter)) {
            return ApiResponse.ok(contactService.findStarred(userId));
        }
        if ("archived".equalsIgnoreCase(filter)) {
            return ApiResponse.ok(contactService.findArchived(userId));
        }
        if ("all".equalsIgnoreCase(filter)) {
            return ApiResponse.ok(contactService.findAll(userId));
        }
        return ApiResponse.ok(contactService.findByUserId(userId));
    }

    /**
     * 鎼滅储鑱旂郴浜?     * GET /api/contacts/search?q=keyword
     */
    @GetMapping("/search")
    public ApiResponse<List<Contact>> search(
            @RequestAttribute("userId") Long userId,
            @RequestParam(name = "q", required = false) String keyword) {
        return ApiResponse.ok(contactService.search(userId, keyword));
    }

    /**
     * 鏌ヨ鍗曚釜鑱旂郴浜?     * GET /api/contacts/{id}
     */
    @GetMapping("/{id}")
    public ApiResponse<Contact> getById(@PathVariable Long id) {
        return ApiResponse.ok(contactService.findById(id));
    }

    /**
     * 鍒涘缓鑱旂郴浜?     * POST /api/contacts
     */
    @PostMapping
    public ApiResponse<Contact> create(@RequestAttribute("userId") Long userId, @RequestBody Contact contact) {
        contact.setUserId(userId);
        return ApiResponse.ok("鍒涘缓鎴愬姛", contactService.create(contact));
    }

    /**
     * 鏇存柊鑱旂郴浜?     * PUT /api/contacts/{id}
     */
    @PutMapping("/{id}")
    public ApiResponse<Contact> update(@PathVariable Long id, @RequestBody Contact contact) {
        return ApiResponse.ok("鏇存柊鎴愬姛", contactService.update(id, contact));
    }

    /**
     * 鍒犻櫎鑱旂郴浜?     * DELETE /api/contacts/{id}
     */
    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        contactService.delete(id);
        return ApiResponse.ok("鍒犻櫎鎴愬姛", null);
    }

    /**
     * 鍒囨崲鏄熸爣
     * PUT /api/contacts/{id}/star
     */
    @PutMapping("/{id}/star")
    public ApiResponse<Contact> toggleStar(@PathVariable Long id) {
        Contact updated = contactService.toggleStar(id);
        return ApiResponse.ok(updated.isStarred() ? "已加星标" : "已取消星标", updated);
    }

    /**
     * 褰掓。
     * PUT /api/contacts/{id}/archive
     */
    @PutMapping("/{id}/archive")
    public ApiResponse<Contact> archive(@PathVariable Long id) {
        return ApiResponse.ok("已归档", contactService.archive(id));
    }

    /**
     * 鎭㈠褰掓。
     * PUT /api/contacts/{id}/restore
     */
    @PutMapping("/{id}/restore")
    public ApiResponse<Contact> restore(@PathVariable Long id) {
        return ApiResponse.ok("已恢复", contactService.restore(id));
    }

    /**
     * 灞忚斀鑱旂郴浜?     * PUT /api/contacts/{id}/block
     */
    @PutMapping("/{id}/block")
    public ApiResponse<Contact> block(@PathVariable Long id) {
        Contact updated = contactService.block(id);
        return ApiResponse.ok("已屏蔽", updated);
    }

    /**
     * 瑙ｉ櫎灞忚斀
     * PUT /api/contacts/{id}/unblock
     */
    @PutMapping("/{id}/unblock")
    public ApiResponse<Contact> unblock(@PathVariable Long id) {
        Contact updated = contactService.unblock(id);
        return ApiResponse.ok("已解除屏蔽", updated);
    }

    /**
     * 娣诲姞鏍囩
     * POST /api/contacts/{id}/labels
     */
    @PostMapping("/{id}/labels")
    public ApiResponse<Contact> addLabel(@PathVariable Long id, @RequestBody Map<String, String> body) {
        String label = body.get("label");
        if (label == null || label.isBlank()) {
            return ApiResponse.error("鏍囩涓嶈兘涓虹┖");
        }
        return ApiResponse.ok("鏍囩娣诲姞鎴愬姛", contactService.addLabel(id, label.trim()));
    }

    /**
     * 鍒犻櫎鏍囩
     * DELETE /api/contacts/{id}/labels/{label}
     */
    @DeleteMapping("/{id}/labels/{label}")
    public ApiResponse<Contact> removeLabel(@PathVariable Long id, @PathVariable String label) {
        return ApiResponse.ok("鏍囩鍒犻櫎鎴愬姛", contactService.removeLabel(id, label));
    }

    /**
     * 鎸夋爣绛剧瓫閫夎仈绯讳汉
     * GET /api/contacts/label/{label}
     */
    @GetMapping("/label/{label}")
    public ApiResponse<List<Contact>> listByLabel(
            @RequestAttribute("userId") Long userId, @PathVariable String label) {
        return ApiResponse.ok(contactService.findByLabel(userId, label));
    }
}
