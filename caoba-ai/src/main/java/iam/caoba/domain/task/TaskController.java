package iam.caoba.domain.task;

import iam.caoba.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    /**
     * 鏌ヨ褰撳墠鐢ㄦ埛鐨勬墍鏈変换鍔?     * GET /api/tasks
     * 鍙€夊弬鏁? status, priority
     */
    @GetMapping
    public ApiResponse<List<Task>> list(
            @RequestAttribute("userId") Long userId,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String priority) {
        List<Task> tasks;
        if (status != null && priority != null) {
            tasks = taskService.findByUserIdAndStatusAndPriority(userId, status, priority);
        } else if (status != null) {
            tasks = taskService.findByUserIdAndStatus(userId, status);
        } else if (priority != null) {
            tasks = taskService.findByUserIdAndPriority(userId, priority);
        } else {
            tasks = taskService.findByUserId(userId);
        }
        return ApiResponse.ok(tasks);
    }

    /**
     * 鏌ヨ鍗曚釜浠诲姟
     * GET /api/tasks/{id}
     */
    @GetMapping("/{id}")
    public ApiResponse<Task> getById(@PathVariable Long id) {
        return ApiResponse.ok(taskService.findById(id));
    }

    /**
     * 鍒涘缓浠诲姟
     * POST /api/tasks
     */
    @PostMapping
    public ApiResponse<Task> create(@RequestAttribute("userId") Long userId, @RequestBody Task task) {
        task.setUserId(userId);
        return ApiResponse.ok("鍒涘缓鎴愬姛", taskService.create(task));
    }

    /**
     * 鏇存柊浠诲姟
     * PUT /api/tasks/{id}
     */
    @PutMapping("/{id}")
    public ApiResponse<Task> update(@PathVariable Long id, @RequestBody Task task) {
        return ApiResponse.ok("鏇存柊鎴愬姛", taskService.update(id, task));
    }

    /**
     * 鏇存柊浠诲姟鐘舵€?     * PATCH /api/tasks/{id}/status
     */
    @PatchMapping("/{id}/status")
    public ApiResponse<Task> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        String status = body.get("status");
        if (status == null || status.isBlank()) {
            return ApiResponse.error("状态不能为空");
        }
        return ApiResponse.ok("状态更新成功", taskService.updateStatus(id, status));
    }

    /**
     * 鏇存柊浠诲姟杩涘害
     * PATCH /api/tasks/{id}/progress
     */
    @PatchMapping("/{id}/progress")
    public ApiResponse<Task> updateProgress(@PathVariable Long id, @RequestBody Map<String, Object> body) {
        Object progressObj = body.get("progress");
        if (progressObj == null) {
            return ApiResponse.error("杩涘害涓嶈兘涓虹┖");
        }
        Integer progress;
        try {
            progress = Integer.parseInt(progressObj.toString());
        } catch (NumberFormatException e) {
            return ApiResponse.error("进度值格式错误");
        }
        return ApiResponse.ok("杩涘害鏇存柊鎴愬姛", taskService.updateProgress(id, progress));
    }

    /**
     * 鍒犻櫎浠诲姟
     * DELETE /api/tasks/{id}
     */
    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        taskService.delete(id);
        return ApiResponse.ok("鍒犻櫎鎴愬姛", null);
    }
}
