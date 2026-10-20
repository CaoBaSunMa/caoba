package iam.caoba.domain.dashboard;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DashboardService {

    private final JdbcTemplate jdbc;

    public DashboardService(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    /**
     * 获取仪表盘统计数据
     */
    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();

        // 总用户数
        Integer totalUsers = jdbc.queryForObject(
                "SELECT COUNT(*) FROM users", Integer.class);
        stats.put("totalUsers", totalUsers != null ? totalUsers : 0);

        // 今日消息数
        Integer todayMessages = jdbc.queryForObject(
                "SELECT COUNT(*) FROM chat_messages WHERE DATE(created_at) = CURDATE()", Integer.class);
        stats.put("todayMessages", todayMessages != null ? todayMessages : 0);

        // 今日邮件数
        Integer todayEmails = jdbc.queryForObject(
                "SELECT COUNT(*) FROM emails WHERE DATE(created_at) = CURDATE()", Integer.class);
        stats.put("todayEmails", todayEmails != null ? todayEmails : 0);

        // 任务完成率
        Integer totalTasks = jdbc.queryForObject(
                "SELECT COUNT(*) FROM tasks", Integer.class);
        Integer doneTasks = jdbc.queryForObject(
                "SELECT COUNT(*) FROM tasks WHERE status = 'DONE'", Integer.class);
        double taskCompletionRate = (totalTasks != null && totalTasks > 0 && doneTasks != null)
                ? (double) doneTasks / totalTasks * 100
                : 0.0;
        stats.put("taskCompletionRate", Math.round(taskCompletionRate * 10.0) / 10.0);
        stats.put("totalTasks", totalTasks != null ? totalTasks : 0);
        stats.put("doneTasks", doneTasks != null ? doneTasks : 0);

        // 本月事件数
        Integer monthEvents = jdbc.queryForObject(
                "SELECT COUNT(*) FROM calendar_events WHERE YEAR(start_time) = YEAR(CURDATE()) AND MONTH(start_time) = MONTH(CURDATE())",
                Integer.class);
        stats.put("monthEvents", monthEvents != null ? monthEvents : 0);

        // 文件总数
        Integer totalFiles = jdbc.queryForObject(
                "SELECT COUNT(*) FROM files WHERE is_deleted = FALSE", Integer.class);
        stats.put("totalFiles", totalFiles != null ? totalFiles : 0);

        return stats;
    }
}
