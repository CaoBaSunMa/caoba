package iam.caoba.domain.task;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepo;

    public Task create(Task task) {
        if (task.getTitle() == null || task.getTitle().isBlank()) {
            throw new RuntimeException("浠诲姟鏍囬涓嶈兘涓虹┖");
        }
        Long id = taskRepo.insert(task);
        return taskRepo.findById(id);
    }

    public Task findById(Long id) {
        Task task = taskRepo.findById(id);
        if (task == null) {
        throw new ResourceNotFoundException("任务不存在：" + id);
        }
        return task;
    }

    public List<Task> findByUserId(Long userId) {
        return taskRepo.findByUserId(userId);
    }

    public List<Task> findByUserIdAndStatus(Long userId, String status) {
        return taskRepo.findByUserIdAndStatus(userId, status);
    }

    public List<Task> findByUserIdAndPriority(Long userId, String priority) {
        return taskRepo.findByUserIdAndPriority(userId, priority);
    }

    public List<Task> findByUserIdAndStatusAndPriority(Long userId, String status, String priority) {
        return taskRepo.findByUserIdAndStatusAndPriority(userId, status, priority);
    }

    public Task update(Long id, Task updated) {
        Task existing = findById(id);
        if (updated.getTitle() != null) existing.setTitle(updated.getTitle());
        if (updated.getDescription() != null) existing.setDescription(updated.getDescription());
        if (updated.getStatus() != null) existing.setStatus(updated.getStatus());
        if (updated.getPriority() != null) existing.setPriority(updated.getPriority());
        if (updated.getDueDate() != null) existing.setDueDate(updated.getDueDate());
        if (updated.getStartDate() != null) existing.setStartDate(updated.getStartDate());
        if (updated.getProgress() != null) existing.setProgress(updated.getProgress());
        if (updated.getAssignedTo() != null) existing.setAssignedTo(updated.getAssignedTo());
        taskRepo.update(existing);
        return taskRepo.findById(id);
    }

    public Task updateStatus(Long id, String status) {
        Task existing = findById(id);
        String[] validStatuses = {"TODO", "IN_PROGRESS", "DONE"};
        for (String s : validStatuses) {
            if (s.equals(status)) {
                taskRepo.updateStatus(id, status);
                return taskRepo.findById(id);
            }
        }
            throw new RuntimeException("无效的状态：" + status + "，允许：TODO, IN_PROGRESS, DONE");
    }

    public Task updateProgress(Long id, Integer progress) {
        if (progress < 0 || progress > 100) {
            throw new RuntimeException("杩涘害鍊煎繀椤诲湪 0~100 涔嬮棿");
        }
        findById(id); // ensure exists
        taskRepo.updateProgress(id, progress);
        // Auto-complete if progress reaches 100
        if (progress == 100) {
            taskRepo.updateStatus(id, "DONE");
        }
        return taskRepo.findById(id);
    }

    public void delete(Long id) {
        findById(id); // ensure exists
        taskRepo.deleteById(id);
    }
}
