package iam.caoba.config;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.math.BigDecimal;
import java.time.LocalDate;

@Component
public class DataInitializer implements CommandLineRunner {

    private final JdbcTemplate jdbc;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(JdbcTemplate jdbc, PasswordEncoder passwordEncoder) {
        this.jdbc = jdbc;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // Ensure admin user exists with correct password
        String hash = passwordEncoder.encode("admin123");
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM users WHERE username = 'admin'", Integer.class);
        Long adminId;
        if (count == null || count == 0) {
            jdbc.update(
                "INSERT INTO users (username, email, password, full_name, role, enabled) VALUES (?,?,?,?,?,?)",
                "admin", "admin@caoba.com", hash, "管理员", "ADMIN", true);
            adminId = jdbc.queryForObject("SELECT id FROM users WHERE username = 'admin'", Long.class);
            System.out.println("✅ Default admin user created (admin / admin123)");
        } else {
            // Always reset admin password to a valid bcrypt hash of admin123,
            // regardless of what schema.sql seeded.
            jdbc.update("UPDATE users SET password = ? WHERE username = 'admin'", hash);
            adminId = jdbc.queryForObject("SELECT id FROM users WHERE username = 'admin'", Long.class);
            System.out.println("✅ Default admin password reset (admin / admin123)");
        }
        seedContacts(adminId);
        ensureContactFlags();
        ensureInvoiceColumns();
        seedInvoices(adminId);
        prepareChatSchema();
        seedChat(adminId);
        seedCalendarEvents(adminId);
        seedEmails(adminId);
        seedBoards(adminId);
        seedTasks(adminId);
        seedBlogPosts(adminId);
        seedFiles(adminId);
        seedIntegrations(adminId);
        seedGallery(adminId);
        scaleTo100(adminId);
    }

    /** 为存量库补上 invoices / invoice_items 表的新列（幂等） */
    private void ensureInvoiceColumns() {
        String[][] cols = {
            {"invoices", "issue_date", "DATE NULL"},
            {"invoices", "client_code", "VARCHAR(50)"},
            {"invoices", "client_address", "VARCHAR(500)"},
            {"invoices", "tags", "VARCHAR(1000)"},
            {"invoices", "terms", "TEXT"},
            {"invoices", "memo", "TEXT"},
            {"invoices", "kind", "VARCHAR(20) DEFAULT 'INVOICE'"},
            {"invoices", "is_archived", "BOOLEAN NOT NULL DEFAULT FALSE"},
            {"invoices", "is_deleted", "BOOLEAN NOT NULL DEFAULT FALSE"},
            {"invoice_items", "title", "VARCHAR(200)"},
            {"invoice_items", "discount", "DECIMAL(12,2) DEFAULT 0"},
            {"invoice_items", "discount_type", "VARCHAR(10) DEFAULT 'per'"},
        };
        for (String[] c : cols) {
            Integer exists = jdbc.queryForObject(
                "SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() "
                    + "AND TABLE_NAME = ? AND COLUMN_NAME = ?", Integer.class, c[0], c[1]);
            if (exists != null && exists == 0) {
                jdbc.execute("ALTER TABLE " + c[0] + " ADD COLUMN " + c[1] + " " + c[2]);
                System.out.println("✅ Added column " + c[0] + "." + c[1]);
            }
        }
    }

    /** 为存量库补上 contacts 表的新列（幂等） */
    private void ensureContactFlags() {
        Integer starred = jdbc.queryForObject(
            "SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() "
                + "AND TABLE_NAME = 'contacts' AND COLUMN_NAME = 'is_starred'", Integer.class);
        if (starred != null && starred == 0) {
            jdbc.execute("ALTER TABLE contacts ADD COLUMN is_starred BOOLEAN NOT NULL DEFAULT FALSE");
            System.out.println("✅ Added column contacts.is_starred");
        }
        Integer archived = jdbc.queryForObject(
            "SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() "
                + "AND TABLE_NAME = 'contacts' AND COLUMN_NAME = 'is_archived'", Integer.class);
        if (archived != null && archived == 0) {
            jdbc.execute("ALTER TABLE contacts ADD COLUMN is_archived BOOLEAN NOT NULL DEFAULT FALSE");
            System.out.println("✅ Added column contacts.is_archived");
        }
        Integer blocked = jdbc.queryForObject(
            "SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() "
                + "AND TABLE_NAME = 'contacts' AND COLUMN_NAME = 'is_blocked'", Integer.class);
        if (blocked != null && blocked == 0) {
            jdbc.execute("ALTER TABLE contacts ADD COLUMN is_blocked BOOLEAN NOT NULL DEFAULT FALSE");
            System.out.println("✅ Added column contacts.is_blocked");
        }
    }

    private void seedContacts(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM contacts WHERE user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        Object[][] seeds = {
            {"摩根·弗里曼", "morgan@caoba.com", "+86 138 0001 5689", "[\"VIP\",\"合伙人\"]"},
            {"乌玛·瑟曼", "huma@caoba.com", "+86 138 0002 2365", "[\"合伙人\",\"Angular 开发\"]"},
            {"查理·卓别林", "charlie@caoba.com", "+86 138 0003 7896", "[\"合伙人\"]"},
            {"温斯顿·丘吉尔", "winston@caoba.com", "+86 138 0004 5463", "[\"VIP\",\"广告\"]"},
            {"杰奎琳·乔克", "jaqul@caoba.com", "+86 138 0005 4715", "[\"VIP\",\"合伙人\"]"},
            {"汤姆·克鲁斯", "tom@caoba.com", "+86 138 0006 4862", "[\"合伙人\",\"Angular 开发\"]"},
            {"丹尼尔·克雷格", "daniel@caoba.com", "+86 138 0007 5689", "[\"合伙人\"]"},
            {"凯瑟琳·琼斯", "kath@caoba.com", "+86 138 0008 7896", "[\"VIP\"]"},
            {"草坝工作室", "contact@caoba.com", "+86 138 0009 5463", "[\"VIP\",\"合伙人\"]"},
            {"迪恩·肖", "dean@caoba.com", "+86 138 0010 2365", "[\"合伙人\",\"Angular 开发\"]"},
        };
        for (Object[] s : seeds) {
            jdbc.update(
                "INSERT INTO contacts (user_id, first_name, email, phone, labels, created_at, updated_at) "
                    + "VALUES (?,?,?,?,?,NOW(),NOW())",
                userId, s[0], s[1], s[2], s[3]);
        }
        System.out.println("✅ Seeded " + seeds.length + " sample contacts for admin");
    }

    private void seedInvoices(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM invoices WHERE user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        Object[][] seeds = {
            {"INV-2026-001", "已完成", "超级新星咨询", "thompson@caoba.com", "PAID",
                "2600.00", "100.00", "2500.00", "2026-09-01", "2026-09-30", "标准",
                "已支付的设计与开发服务费用。", "['网页设计','品牌']"},
            {"INV-2026-002", "进行中", "摩根集团", "morgan@caoba.com", "SENT",
                "1500.00", "50.00", "1450.00", "2026-09-05", "2026-10-05", "简易",
                "网站改版项目首期款项。", "['开发','运维']"},
            {"INV-2026-003", "草稿", "草坝工作室", "contact@caoba.com", "DRAFT",
                "780.00", "0.00", "780.00", "2026-09-10", "2026-10-10", "经典",
                "内容策划与社交媒体推广。", "['营销']"},
            {"INV-2026-004", "已逾期", "克里夫工厂", "winston@caoba.com", "OVERDUE",
                "900.00", "30.00", "870.00", "2026-08-01", "2026-08-31", "贸易",
                "设备采购尾款。", "['采购']"},
        };
        for (Object[] s : seeds) {
            KeyHolder kh = new GeneratedKeyHolder();
            jdbc.update(conn -> {
                PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO invoices (user_id, invoice_number, client_name, client_email, status, subtotal, discount, tax, total, currency, due_date, notes, template, issue_date, client_code, tags, terms, kind, is_archived, is_deleted, created_at, updated_at) "
                        + "VALUES (?,?,?,?,?,?,?,0,?,?,?,?,?,?,?,?,?,?,?,?,NOW(),NOW())",
                    Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, userId);
                ps.setString(2, (String) s[0]);
                ps.setString(3, (String) s[2]);
                ps.setString(4, (String) s[3]);
                ps.setString(5, (String) s[4]);
                ps.setBigDecimal(6, new java.math.BigDecimal((String) s[5]));
                ps.setBigDecimal(7, new java.math.BigDecimal((String) s[6]));
                ps.setBigDecimal(8, new java.math.BigDecimal((String) s[7]));
                ps.setString(9, "CNY");
                ps.setDate(10, java.sql.Date.valueOf((String) s[9]));
                ps.setString(11, (String) s[11]);
                ps.setString(12, (String) s[10]);
                ps.setDate(13, java.sql.Date.valueOf((String) s[8]));
                ps.setString(14, "C-" + (String) s[0]);
                ps.setString(15, (String) s[12]);
                ps.setString(16, "请在开票之日起 15 天内付款，逾期按 14% 年利率计息。\n汇款时请注明发票编号。");
                ps.setString(17, "INVOICE");
                ps.setBoolean(18, false);
                ps.setBoolean(19, false);
                return ps;
            }, kh);
            Long invoiceId = kh.getKey().longValue();
            jdbc.update(
                "INSERT INTO invoice_items (invoice_id, title, description, quantity, unit_price, discount, discount_type, amount) VALUES (?,?,?,?,?,?,?,?)",
                invoiceId, "咨询服务", "提供专业咨询服务一周期", 1, new java.math.BigDecimal((String) s[5]),
                new java.math.BigDecimal("0"), "per", new java.math.BigDecimal((String) s[5]));
        }
        System.out.println("✅ Seeded " + seeds.length + " sample invoices for admin");
    }

    // ==================== 常量：演示用户 ====================

    private Object[][] peerUsers() {
        return new Object[][] {
            {"morgan", "morgan@caoba.com", "摩根·弗里曼", "/avatar/morgan.svg"},
            {"huma", "huma@caoba.com", "乌玛·瑟曼", "/avatar/huma.svg"},
            {"charlie", "charlie@caoba.com", "查理·卓别林", "/avatar/charlie.svg"},
            {"winston", "winston@caoba.com", "温斯顿·丘吉尔", "/avatar/winston.svg"},
            {"tomcz", "tomcz@caoba.com", "汤姆·克鲁斯", "/avatar/tomcz.svg"},
        };
    }

    /** 为存量库补上 chat 表的安全列（幂等） */
    private void prepareChatSchema() {
        String[][] cols = {
            {"chat_conversations", "last_message", "VARCHAR(500)"},
            {"chat_conversations", "unread", "INT DEFAULT 0"},
        };
        for (String[] c : cols) {
            Integer exists = jdbc.queryForObject(
                "SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() "
                    + "AND TABLE_NAME = ? AND COLUMN_NAME = ?", Integer.class, c[0], c[1]);
            if (exists != null && exists == 0) {
                try {
                    jdbc.execute("ALTER TABLE " + c[0] + " ADD COLUMN " + c[1] + " " + c[2]);
                    System.out.println("✅ Added column " + c[0] + "." + c[1]);
                } catch (Exception e) {
                    System.out.println("⚠️ Skip column " + c[0] + "." + c[1] + ": " + e.getMessage());
                }
            }
        }
    }

    /** 插入演示用户（仅当 users 表只有 admin 时） */
    private Long[] ensurePeerUsers() {
        Integer total = jdbc.queryForObject("SELECT COUNT(*) FROM users", Integer.class);
        java.util.List<Long> ids = new java.util.ArrayList<>();
        if (total != null && total > 1) {
            // 已有用户，直接查 username 与 id
            for (Object[] p : peerUsers()) {
                Long id = jdbc.queryForObject(
                    "SELECT id FROM users WHERE username = ?", Long.class, p[0]);
                if (id != null) ids.add(id);
            }
            return ids.toArray(new Long[0]);
        }
        String hash = passwordEncoder.encode("demo123");
        for (Object[] p : peerUsers()) {
            jdbc.update(
                "INSERT INTO users (username, email, password, full_name, role, enabled, avatar) VALUES (?,?,?,?,?,?,?)",
                p[0], p[1], hash, p[2], "USER", true, p[3]);
            ids.add(jdbc.queryForObject("SELECT id FROM users WHERE username = ?", Long.class, p[0]));
        }
        System.out.println("✅ Seeded " + peerUsers().length + " demo peers for chat");
        return ids.toArray(new Long[0]);
    }

    /** 聊天种子：会话 + 成员 + 消息 */
    private void seedChat(Long adminId) {
        Integer convCount = jdbc.queryForObject(
            "SELECT COUNT(*) FROM chat_conversations WHERE created_by = ?", Integer.class, adminId);
        if (convCount != null && convCount > 0) {
            return;
        }
        Long[] peers = ensurePeerUsers();
        // 直接会话：admin 与每位演示用户
        String[][] directMsgs = {
            {"请发一些演示文稿的资料给我", "昨天的会议纪要已经整理好，需要发给你吗？"},
            {"晚上一起讨论新方案", "好的，我们明天再谈吧。新营销页面的图片已经发过去了。"},
            {"你好，感谢邀请！", "尽快把合同草稿发我一份。"},
            {"把你剩下的报表给我看看", "报表已归档，随时可以调阅。"},
            {"未接来电", "抱歉刚才在开会，稍后回电。"},
        };
        for (int i = 0; i < peers.length && i < directMsgs.length; i++) {
            KeyHolder kh = new GeneratedKeyHolder();
            String name = peerUsers()[i][2].toString();
            final String avatar = peerUsers()[i][3].toString();
            final String lastMsg = directMsgs[i][0];
            final int unread = (i % 3 == 0) ? 2 : 0;
            jdbc.update(conn -> {
                PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO chat_conversations (type, name, avatar, created_by, created_at, updated_at, last_message, unread) "
                        + "VALUES ('DIRECT', ?, ?, ?, NOW(), NOW(), ?, ?)",
                    Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, name);
                ps.setString(2, avatar);
                ps.setLong(3, adminId);
                ps.setString(4, lastMsg);
                ps.setInt(5, unread);
                return ps;
            }, kh);
            Long convId = kh.getKey().longValue();
            // members
            jdbc.update("INSERT INTO chat_members (conversation_id, user_id, role, joined_at) VALUES (?,?,?,NOW())", convId, adminId, "ADMIN");
            jdbc.update("INSERT INTO chat_members (conversation_id, user_id, role, joined_at) VALUES (?,?,?,NOW())", convId, peers[i], "MEMBER");
            // messages
            jdbc.update("INSERT INTO chat_messages (conversation_id, sender_id, content, type, created_at) VALUES (?,?,?,?,NOW())",
                convId, peers[i], directMsgs[i][0], "TEXT");
            jdbc.update("INSERT INTO chat_messages (conversation_id, sender_id, content, type, created_at) VALUES (?,?,?,?,NOW())",
                convId, adminId, directMsgs[i][1], "TEXT");
        }
        // 群聊
        KeyHolder gh = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO chat_conversations (type, name, avatar, created_by, created_at, updated_at, last_message, unread) "
                    + "VALUES ('GROUP', '开发者交流群', '/avatar/group.svg', ?, NOW(), NOW(), '干得漂亮 @所有人', 3)",
                Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, adminId);
            return ps;
        }, gh);
        Long gid = gh.getKey().longValue();
        jdbc.update("INSERT INTO chat_members (conversation_id, user_id, role, joined_at) VALUES (?,?,?,NOW())", gid, adminId, "ADMIN");
        for (Long p : peers) {
            jdbc.update("INSERT INTO chat_members (conversation_id, user_id, role, joined_at) VALUES (?,?,?,NOW())", gid, p, "MEMBER");
        }
        jdbc.update("INSERT INTO chat_messages (conversation_id, sender_id, content, type, created_at) VALUES (?,?,?,?,NOW())",
            gid, peers[1], "大家今天下午三点开会。", "TEXT");
        jdbc.update("INSERT INTO chat_messages (conversation_id, sender_id, content, type, created_at) VALUES (?,?,?,?,NOW())",
            gid, adminId, "收到，准时参加。", "TEXT");
        jdbc.update("INSERT INTO chat_messages (conversation_id, sender_id, content, type, created_at) VALUES (?,?,?,?,NOW())",
            gid, peers[0], "干得漂亮 @所有人，你做得很好", "TEXT");
        System.out.println("✅ Seeded chat conversations for admin");
    }

    /** 日历种子 */
    private void seedCalendarEvents(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM calendar_events WHERE user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        Object[][] evts = {
            {"产品评审会", "评审月度产品迭代方案", "2026-09-25T09:00:00", "2026-09-25T10:30:00", "false", "会议室 A", "工作", "PUBLIC", "HIGH"},
            {"客户拜访", "拜访摩根集团商讨续约", "2026-09-26T14:00:00", "2026-09-26T15:30:00", "false", "摩根大厦", "客户", "PUBLIC", "MEDIUM"},
            {"团队建设日", "全员户外团建活动", "2026-09-27T08:00:00", "2026-09-27T18:00:00", "true", "郊野公园", "活动", "PUBLIC", "LOW"},
            {"季度总结", "Q3 季度业务总结会议", "2026-09-30T10:00:00", "2026-09-30T12:00:00", "false", "视频会议", "工作", "PUBLIC", "HIGH"},
            {"付款提醒", "缴清水电与房租", "2026-10-01T09:00:00", "2026-10-01T10:00:00", "false", "线上", "个人", "PRIVATE", "MEDIUM"},
        };
        for (Object[] e : evts) {
            KeyHolder kh = new GeneratedKeyHolder();
            jdbc.update(conn -> {
                PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO calendar_events (user_id, title, description, start_time, end_time, all_day, location, category, visibility, priority, created_at) "
                        + "VALUES (?,?,?,?,?,?,?,?,?,?,NOW())",
                    Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, userId);
                ps.setString(2, (String) e[0]);
                ps.setString(3, (String) e[1]);
                ps.setString(4, (String) e[2]);
                ps.setString(5, (String) e[3]);
                ps.setBoolean(6, Boolean.parseBoolean((String) e[4]));
                ps.setString(7, (String) e[5]);
                ps.setString(8, (String) e[6]);
                ps.setString(9, (String) e[7]);
                ps.setString(10, (String) e[8]);
                return ps;
            }, kh);
            Long eventId = kh.getKey().longValue();
            if ("产品评审会".equals(e[0])) {
                jdbc.update("INSERT INTO calendar_reminders (event_id, user_id, remind_at, frequency, created_at) VALUES (?,?,?,?,NOW())",
                    eventId, userId, "2026-09-25 08:30:00", "ONCE");
            }
        }
        System.out.println("✅ Seeded " + evts.length + " calendar events for admin");
    }

    /** 邮件种子 */
    private void seedEmails(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM emails WHERE from_user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        Object[][] mails = {
            {"morgan@caoba.com", "项目启动通知", "您好！贵公司的网站改版项目将于下周一正式启动，请确认需求文档。", "INBOX", "false", "false"},
            {"huma@caoba.com", "会议邀请：产品讨论", "邀请您参加周五下午的产品设计方案讨论会，地点：线上。", "INBOX", "false", "false"},
            {"charlie@caoba.com", "发票开具提醒", "请尽快确认本季度服务发票抬头与金额信息。", "INBOX", "false", "true"},
            {"winston@caoba.com", "合同续签事宜", "贵司合同即将到期，请安排时间商谈续签细则。", "INBOX", "true", "false"},
            {null, "季度复盘报告", "这是最新一期的季度业务复盘报告，请查收。", "SENT", "true", "false"},
            {null, "新员工入职须知", "请转发给本月新入职的员工，内含入职流程与注意事项。", "SENT", "true", "false"},
            {null, "草稿：供应商询价", "关于办公设备采购的询价函草稿，待完善后发送。", "DRAFT", "true", "false"},
            {"admin@caoba.com", "您已被列入垃圾邮件", "这是一封测试性垃圾邮件，用于演示过滤功能。", "SPAM", "true", "true"},
        };
        for (Object[] m : mails) {
            KeyHolder kh = new GeneratedKeyHolder();
            String fromAddress = m[0] != null ? (String) m[0] : "admin@caoba.com";
            jdbc.update(conn -> {
                PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO emails (from_user_id, from_address, subject, body, is_read, is_starred, folder, created_at) "
                        + "VALUES (?,?,?,?,?,?,?,NOW())",
                    Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, userId);
                ps.setString(2, fromAddress);
                ps.setString(3, (String) m[1]);
                ps.setString(4, (String) m[2]);
                ps.setBoolean(5, Boolean.parseBoolean((String) m[4]));
                ps.setBoolean(6, Boolean.parseBoolean((String) m[5]));
                ps.setString(7, (String) m[3]);
                return ps;
            }, kh);
            Long emailId = kh.getKey().longValue();
            if (!"INBOX".equals(m[3])) {
                continue;
            }
            jdbc.update("INSERT INTO email_recipients (email_id, user_id, address, type) VALUES (?,?,?,?)",
                emailId, userId, fromAddress.split("@")[0] + "@caoba.com", "TO");
        }
        System.out.println("✅ Seeded " + mails.length + " emails for admin");
    }

    /** 看板种子（看板 + 列 + 卡片） */
    private void seedBoards(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM boards WHERE user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        KeyHolder kh = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO boards (name, type, user_id, created_at) VALUES ('产品研发', 'KANBAN', ?, NOW())",
                Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, userId);
            return ps;
        }, kh);
        Long boardId = kh.getKey().longValue();

        String[][] cols = {
            {"待办", "0"}, {"进行中", "1"}, {"已完成", "2"},
        };
        java.util.Map<String, Long> colIds = new java.util.LinkedHashMap<>();
        for (String[] c : cols) {
            KeyHolder ck = new GeneratedKeyHolder();
            jdbc.update(conn -> {
                PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO board_columns (board_id, name, position) VALUES (?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, boardId);
                ps.setString(2, c[0]);
                ps.setInt(3, Integer.parseInt(c[1]));
                return ps;
            }, ck);
            colIds.put(c[0], ck.getKey().longValue());
        }
        Object[][] cards = {
            {"设计新首页原型", "完成新版官网首页的视觉原型设计", "HIGH", "待办", "2026-09-30"},
            {"编写需求文档", "整理产品需求并输出 PRD", "MEDIUM", "待办", "2026-09-28"},
            {"开发登录接口", "后端登录与 JWT 鉴权接口开发", "URGENT", "进行中", "2026-09-26"},
            {"前端页面联调", "修复联调中的跨域与鉴权问题", "MEDIUM", "进行中", "2026-09-27"},
            {"部署测试环境", "将最新版本部署到测试环境", "LOW", "已完成", "2026-09-24"},
            {"撰写使用手册", "输出 v1.0 在线使用手册", "LOW", "已完成", "2026-09-23"},
        };
        for (int i = 0; i < cards.length; i++) {
            JdbcTemplate j = jdbc;
            Long colId = colIds.get(cards[i][3]);
            j.update(
                "INSERT INTO board_cards (column_id, board_id, title, description, priority, due_date, position, created_at) VALUES (?,?,?,?,?,?,?,NOW())",
                colId, boardId, cards[i][0], cards[i][1], cards[i][2],
                java.sql.Date.valueOf((String) cards[i][4]), i);
        }
        // 销售管道看板
        KeyHolder pk = new GeneratedKeyHolder();
        jdbc.update(conn -> {
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO boards (name, type, user_id, created_at) VALUES ('销售管道', 'PIPELINE', ?, NOW())",
                Statement.RETURN_GENERATED_KEYS);
            ps.setLong(1, userId);
            return ps;
        }, pk);
        Long pipeId = pk.getKey().longValue();
        String[][] pcols = {
            {"新线索", "0"}, {"已联系", "1"}, {"报价中", "2"}, {"已成交", "3"},
        };
        java.util.Map<String, Long> pcolIds = new java.util.LinkedHashMap<>();
        for (String[] c : pcols) {
            KeyHolder ck = new GeneratedKeyHolder();
            jdbc.update(conn -> {
                PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO board_columns (board_id, name, position) VALUES (?,?,?)",
                    Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, pipeId);
                ps.setString(2, c[0]);
                ps.setInt(3, Integer.parseInt(c[1]));
                return ps;
            }, ck);
            pcolIds.put(c[0], ck.getKey().longValue());
        }
        Object[][] deals = {
            {"草坝工作室", "官网改版询盘", "MEDIUM", "新线索", "2026-09-30"},
            {"摩根集团", "会员系统升级意向", "HIGH", "新线索", "2026-09-29"},
            {"克里夫工厂", "已发送正式报价", "URGENT", "报价中", "2026-09-28"},
            {"超级新星咨询", "合同已签约，待收款", "HIGH", "已成交", "2026-09-25"},
        };
        for (int i = 0; i < deals.length; i++) {
            Long colId = pcolIds.get(deals[i][3]);
            jdbc.update(
                "INSERT INTO board_cards (column_id, board_id, title, description, priority, due_date, position, created_at) VALUES (?,?,?,?,?,?,?,NOW())",
                colId, pipeId, deals[i][0], deals[i][1], deals[i][2],
                java.sql.Date.valueOf((String) deals[i][4]), i);
        }
        // 项目看板
        jdbc.update("INSERT INTO boards (name, type, user_id, created_at) VALUES ('Caoba 官网改版', 'PROJECT', ?, NOW())", userId);
        System.out.println("✅ Seeded boards (KANBAN/PIPELINE/PROJECT) for admin");
    }

    /** 待办任务种子 */
    private void seedTasks(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM tasks WHERE user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        Object[][] tasks = {
            {"完成季度汇报 PPT", "整理 Q3 业务数据并制作汇报材料。", "IN_PROGRESS", "HIGH", "2026-09-30", "2026-09-25", 60},
            {"预约体检", "本月完成年度体检预约", "TODO", "LOW", "2026-10-05", "2026-09-24", 0},
            {"修复支付模块 Bug", "处理订单超时导致的双重支付问题。", "IN_PROGRESS", "URGENT", "2026-09-27", "2026-09-24", 30},
            {"发布 v1.2 版本", "合入全部特性分支并发布测试版本", "TODO", "HIGH", "2026-10-01", "2026-09-26", 0},
            {"整理设计资产", "归档图标与插画源文件", "DONE", "MEDIUM", "2026-09-23", "2026-09-20", 100},
            {"团队周会", "同步各模块进展与风险", "DONE", "MEDIUM", "2026-09-22", "2026-09-22", 100},
        };
        for (Object[] t : tasks) {
            jdbc.update(
                "INSERT INTO tasks (user_id, title, description, status, priority, due_date, start_date, progress, created_at, updated_at) "
                    + "VALUES (?,?,?,?,?,?,?,?,NOW(),NOW())",
                userId, t[0], t[1], t[2], t[3],
                java.sql.Date.valueOf((String) t[4]), java.sql.Date.valueOf((String) t[5]), t[6]);
        }
        System.out.println("✅ Seeded " + tasks.length + " tasks for admin");
    }

    /** 博客种子 */
    private void seedBlogPosts(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM blog_posts WHERE user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        Object[][] posts = {
            {"用 Vue 3 构建现代化 SaaS 前端", "caoba-vue3-saas",
                "本文总结了使用 Vue 3 + Bootstrap 构建企业级 SaaS 前端的实践经验，涵盖组合式 API、Pinia 状态管理与组件设计。",
                "Vue 3 正式发布以来，组合式 API 与工程化能力大幅提升。我们基于 Vue 3 重构了 Caoba 前端……",
                "技术分享", "PUBLISHED", "[\"Vue3\",\"前端\"]", "12"},
            {"Spring Boot 后端最佳实践", "spring-boot-best-practice",
                "围绕分层架构、安全认证与数据库访问总结 Spring Boot 企业级开发要点。",
                "Spring Boot 以其快速起步与生态丰富著称。本文从工程分层、统一响应、异常处理、JWT 安全等角度展开……",
                "后端开发", "PUBLISHED", "[\"Java\",\"Spring\"]", "8"},
            {"设计系统的配色方法论", "design-system-color",
                "从色轮到质感，聊聊如何建立一套可持续的设计系统配色。",
                "配色是设计系统中最直观也最易失控的部分。今天分享我们在 Caoba 设计系统中沉淀的配色规则……",
                "设计", "DRAFT", "[\"设计\",\"配色\"]", "0"},
            {"mysql schema 演进与快照管理", "mysql-schema-evolution",
                "数据库表结构持续演进而又保持幂等的一致性实践。",
                "在 CI/CD 环境下，如何优雅地管理 schema 变更？本文分享使用幂等 ALTER 与快照文件的经验……",
                "数据库", "ARCHIVED", "[\"MySQL\",\"运维\"]", "3"},
        };
        for (Object[] p : posts) {
            jdbc.update(
                "INSERT INTO blog_posts (user_id, title, slug, content, excerpt, status, category, tags, views, created_at, updated_at) "
                    + "VALUES (?,?,?,?,?,?,?,?,?,NOW(),NOW())",
                userId, p[0], p[1], p[2], p[3], p[5], p[4], p[6], Integer.parseInt((String) p[7]));
        }
        System.out.println("✅ Seeded " + posts.length + " blog posts for admin");
    }

    /** 文件种子 */
    private void seedFiles(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM files WHERE user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        Object[][] files = {
            {"年度预算.xlsx", "文档", "/", "88512", "false", "false"},
            {"产品原型.vsdx", "设计", "/设计", "2048000", "false", "false"},
            {"会议纪要 0918.docx", "文档", "/文档", "25600", "true", "false"},
            {"官网首页.png", "图片", "/图片", "1024000", "false", "false"},
            {"宣传视频成品.mp4", "视频", "/视频", "123456789", "true", "false"},
            {"废弃草稿.txt", "文档", "/归档", "2048", "false", "true"},
        };
        for (Object[] f : files) {
            jdbc.update(
                "INSERT INTO files (user_id, name, original_name, path, type, size, folder, is_starred, is_deleted, created_at, updated_at) "
                    + "VALUES (?,?,?,?,?,?,?,?,?,NOW(),NOW())",
                userId, f[0], f[0], f[2] + "/" + f[0], f[1], Long.parseLong((String) f[3]),
                f[2], Boolean.parseBoolean((String) f[4]), Boolean.parseBoolean((String) f[5]));
        }
        System.out.println("✅ Seeded " + files.length + " files for admin");
    }

    /** 集成种子 */
    private void seedIntegrations(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM integrations WHERE user_id = ?", Integer.class, userId);
        if (count != null && count > 0) {
            return;
        }
        Object[][] apps = {
            {"Slack", "slack", "协作", "CONNECTED"},
            {"GitHub", "github", "开发", "CONNECTED"},
            {"钉钉", "dingtalk", "协作", "DISCONNECTED"},
            {"企业微信", "wecom", "协作", "DISCONNECTED"},
            {"Figma", "figma", "设计", "CONNECTED"},
            {"飞书", "feishu", "办公", "DISCONNECTED"},
            {"腾讯会议", "tencent-meeting", "会议", "DISCONNECTED"},
            {"Notion", "notion", "知识库", "CONNECTED"},
        };
        for (Object[] a : apps) {
            jdbc.update(
                "INSERT INTO integrations (user_id, app_name, app_icon, category, status, config, connected_at, created_at) "
                    + "VALUES (?,?,?,?,?,?,?,NOW())",
                userId, a[0], a[1], a[2], a[3],
                "{\"enabled\":true}", "CONNECTED".equals(a[3]) ? java.sql.Timestamp.valueOf(java.time.LocalDateTime.now().minusDays(3)) : null);
        }
        System.out.println("✅ Seeded " + apps.length + " integrations for admin");
    }

    /** 图库种子：分类 + 关联已有文件 */
    private void seedGallery(Long userId) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM gallery_categories WHERE user_id = ?", Integer.class, userId);
        if (count == null || count == 0) {
            String[] cats = {"图片素材", "视频剪辑", "音频文件", "文档资料"};
            for (String c : cats) {
                jdbc.update("INSERT INTO gallery_categories (user_id, name, created_at) VALUES (?,?,NOW())", userId, c);
            }
            System.out.println("✅ Seeded gallery categories for admin");
        }
        // 幂等关联已有文件到分类（避免重复或遗漏）
        Integer linked = jdbc.queryForObject(
            "SELECT COUNT(*) FROM gallery_media WHERE user_id = ?", Integer.class, userId);
        if (linked == null || linked == 0) {
            Long imgCat = galleryCategoryId(userId, "图片素材");
            Long vidCat = galleryCategoryId(userId, "视频剪辑");
            Long docCat = galleryCategoryId(userId, "文档资料");
            Long img = fileIdByName(userId, "官网首页.png");
            Long vid = fileIdByName(userId, "宣传视频成品.mp4");
            Long doc = fileIdByName(userId, "年度预算.xlsx");
            linkMedia(userId, imgCat, img);
            linkMedia(userId, vidCat, vid);
            linkMedia(userId, docCat, doc);
            System.out.println("✅ Seeded gallery media links for admin");
        }
    }

    private void linkMedia(Long userId, Long categoryId, Long fileId) {
        if (categoryId != null && fileId != null) {
            jdbc.update(
                "INSERT IGNORE INTO gallery_media (user_id, category_id, file_id) VALUES (?,?,?)",
                userId, categoryId, fileId);
        }
    }

    private Long galleryCategoryId(Long userId, String name) {
        try {
            return jdbc.queryForObject(
                "SELECT id FROM gallery_categories WHERE user_id = ? AND name = ? LIMIT 1",
                Long.class, userId, name);
        } catch (Exception e) {
            return null;
        }
    }

    private Long fileIdByName(Long userId, String name) {
        try {
            return jdbc.queryForObject(
                "SELECT id FROM files WHERE user_id = ? AND original_name = ? LIMIT 1",
                Long.class, userId, name);
        } catch (Exception e) {
            return null;
        }
    }

    // ==================== 批量补齐：各域演示数据至 100 条 ====================

    private int countRows(String table, Long userId) {
        Integer c = jdbc.queryForObject(
            "SELECT COUNT(*) FROM " + table + " WHERE user_id = ?", Integer.class, userId);
        return c == null ? 0 : c;
    }

    /** 把字符串数组转为合法 JSON 数组文本（标签字段用） */
    private String jsonArray(String[] items) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < items.length; i++) {
            if (i > 0) sb.append(",");
            sb.append('"').append(items[i]).append('"');
        }
        return sb.append(']').toString();
    }

    /** 主入口：各域批量补齐至 100 条（幂等，达到目标后停止） */
    private void scaleTo100(Long userId) {
        System.out.println("🔄 批量补齐演示数据至 100 条…");
        scaleContacts(userId);
        scaleInvoices(userId);
        scaleBlogPosts(userId);
        scaleFiles(userId);
        scaleGallery(userId);
        scaleTasks(userId);
        scaleCalendarEvents(userId);
        scaleEmails(userId);
        scaleChat(userId);
        scaleBoardCards(userId);
        System.out.println("✅ 批量补齐完成（各域 100 条；集成保持 8 个应用目录）");
    }

    private void scaleContacts(Long userId) {
        int cur = countRows("contacts", userId);
        int need = 100 - cur;
        if (need <= 0) return;
        String[] surnames = {"王", "李", "张", "刘", "陈", "杨", "赵", "黄", "周", "吴",
                              "徐", "孙", "胡", "朱", "高", "林", "何", "郭", "马", "罗"};
        String[] given = {"伟", "芳", "娜", "敏", "静", "丽", "强", "磊", "洋", "艳",
                          "勇", "军", "杰", "娟", "涛", "明", "超", "秀英", "霞", "桂英"};
        String[][] orgs = {
            {"草坝科技", "技术总监"}, {"北极星咨询", "高级顾问"}, {"蓝湾创意", "设计师"}, {"恒信贸易", "采购经理"},
            {"兰亭数据", "数据分析师"}, {"千里马物流", "运营主管"}, {"星云网络", "架构师"}, {"锦绣文化", "内容主编"},
            {"卓越基金", "投资经理"}, {"云杉教育", "市场经理"}, {"天工机械", "项目经理"}, {"晨曦传媒", "视频编导"},
            {"宏图软件", "测试经理"}, {"聚合支付", "风控专员"}, {"阳光保险", "理赔顾问"}, {"盛达地产", "销售总监"},
            {"康泰医疗", "产品经理"}, {"锐驰汽配", "供应链主管"}, {"光年航旅", "客服经理"}, {"绿洲农业", "商务拓展"}
        };
        String[] labelPool = {"VIP", "合伙人", "广告", "促销", "设计师", "React 开发", "协作者"};
        for (int i = 0; i < need; i++) {
            int idx = 10 + i; // 已有 10 条种子
            String fn = surnames[idx % surnames.length] + given[(idx * 7) % given.length];
            String email = "contact" + (idx + 1) + "@caoba.com";
            String phone = "+86 138 " + String.format("%04d", 2000 + (idx % 8000));
            String[] lab = (idx % 4 == 0)
                ? new String[]{labelPool[idx % labelPool.length], labelPool[(idx + 3) % labelPool.length]}
                : new String[]{labelPool[idx % labelPool.length]};
            jdbc.update(
                "INSERT INTO contacts (user_id, first_name, last_name, email, phone, company, position, location, notes, labels, is_starred, is_archived, is_blocked, created_at, updated_at) "
                    + "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,DATE_SUB(NOW(), INTERVAL ? DAY),NOW())",
                userId, fn, null, email, phone,
                orgs[idx % orgs.length][0], orgs[idx % orgs.length][1],
                "中国 · 上海 / 北京", "批量演示联系人 " + (idx + 1), jsonArray(lab),
                idx % 10 == 3, idx % 25 == 7, idx % 33 == 11, idx % 60);
        }
        System.out.println("✅ contacts 补齐至 100");
    }

    private void scaleInvoices(Long userId) {
        int cur = countRows("invoices", userId);
        int need = 100 - cur;
        if (need <= 0) return;
        int maxNum = 0;
        java.util.List<String> nums = jdbc.queryForList(
            "SELECT invoice_number FROM invoices WHERE user_id = ? AND invoice_number LIKE 'INV-%'",
            String.class, userId);
        for (String n : nums) {
            String d = n.replaceAll("\\D", "");
            if (!d.isEmpty()) {
                try {
                    maxNum = Math.max(maxNum, Integer.parseInt(d));
                } catch (Exception ignored) {
                }
            }
        }
        String[][] clients = {
            {"草坝科技", "caoba@caoba.com"}, {"北极星咨询", "beijixing@caoba.com"}, {"蓝湾创意", "lanwan@caoba.com"},
            {"恒信贸易", "hengxin@caoba.com"}, {"兰亭数据", "lanting@caoba.com"}, {"千里马物流", "qianlima@caoba.com"},
            {"星云网络", "xingyun@caoba.com"}, {"锦绣文化", "jinxiu@caoba.com"}, {"光年航旅", "guangnian@caoba.com"},
            {"卓越基金", "zhuoyue@caoba.com"}
        };
        String[] statuses = {"DRAFT", "SENT", "PAID", "OVERDUE", "SENT", "PAID"};
        String[] templates = {"标准", "简易", "经典", "贸易", "现代", "商务"};
        java.util.Random rnd = new java.util.Random(20260901L);
        for (int i = 1; i <= need; i++) {
            int num = maxNum + i;
            String invNo = "INV-2026-" + String.format("%03d", num);
            String[] cl = clients[rnd.nextInt(clients.length)];
            String status = statuses[i % statuses.length];
            double base = 500 + rnd.nextInt(9000);
            BigDecimal subtotal = BigDecimal.valueOf(Math.round(base)).setScale(2);
            BigDecimal discount = (i % 4 == 0)
                ? BigDecimal.valueOf(Math.round(base * 0.1)).setScale(2) : BigDecimal.ZERO;
            BigDecimal tax = BigDecimal.valueOf(Math.round((subtotal.doubleValue() - discount.doubleValue()) * 0.06)).setScale(2);
            BigDecimal total = subtotal.subtract(discount).add(tax).setScale(2);
            String kind = (i % 7 == 0) ? "ESTIMATE" : "INVOICE";
            LocalDate issue = LocalDate.of(2026, 9, 1).plusDays(i);
            LocalDate due = issue.plusDays(30);
            KeyHolder kh = new GeneratedKeyHolder();
            final int fi = i;
            final String fInvNo = invNo, fStatus = status, fKind = kind;
            final String fClient = cl[0], fClientEmail = cl[1];
            final BigDecimal fSub = subtotal, fDisc = discount, fTax = tax, fTotal = total;
            jdbc.update(conn -> {
                PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO invoices (user_id, invoice_number, client_name, client_email, status, subtotal, discount, tax, total, currency, due_date, notes, template, issue_date, client_code, tags, terms, kind, is_archived, is_deleted, created_at, updated_at) "
                        + "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW(),NOW())",
                    Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, userId);
                ps.setString(2, fInvNo);
                ps.setString(3, fClient);
                ps.setString(4, fClientEmail);
                ps.setString(5, fStatus);
                ps.setBigDecimal(6, fSub);
                ps.setBigDecimal(7, fDisc);
                ps.setBigDecimal(8, fTax);
                ps.setBigDecimal(9, fTotal);
                ps.setString(10, "CNY");
                ps.setDate(11, java.sql.Date.valueOf(due));
                ps.setString(12, "批量演示发票 " + num + "：请在到期日前完成付款。");
                ps.setString(13, templates[fi % templates.length]);
                ps.setDate(14, java.sql.Date.valueOf(issue));
                ps.setString(15, "C-" + invNo);
                ps.setString(16, "['服务']");
                ps.setString(17, "请在开票之日起 15 天内付款，逾期按 14% 年利率计息。");
                ps.setString(18, fKind);
                ps.setBoolean(19, false);
                ps.setBoolean(20, false);
                return ps;
            }, kh);
            Long invId = kh.getKey().longValue();
            jdbc.update(
                "INSERT INTO invoice_items (invoice_id, title, description, quantity, unit_price, discount, discount_type, amount) VALUES (?,?,?,?,?,?,?,?)",
                invId, "专业服务费", "批量演示服务项目", 1, fSub, BigDecimal.ZERO, "per", fSub);
        }
        System.out.println("✅ invoices 补齐至 100（含估算单）");
    }

    private void scaleBlogPosts(Long userId) {
        int cur = countRows("blog_posts", userId);
        int need = 100 - cur;
        if (need <= 0) return;
        String[] titles = {
            "Vue 3 组合式 API 入门", "Pinia 状态管理实践", "Spring Boot 统一异常处理", "JWT 鉴权最佳实践",
            "MySQL 索引优化指南", "Docker 容器化部署", "CSS 布局新特性", "组件化设计模式", "接口性能调优记录",
            "前端工程化搭建", "Quartz 定时任务", "Redis 缓存策略", "微服务拆分思路", "CI/CD 流水线实践",
            "数据可视化选型", "无障碍设计规范", "TypeScript 类型体操", "单元测试覆盖率", "日志采集与监控", "响应式设计原理"
        };
        String[] cats = {"技术分享", "后端开发", "前端", "设计", "数据库", "运维", "产品", "安全"};
        for (int i = 0; i < need; i++) {
            int n = cur + i + 1;
            String title = titles[i % titles.length] + "（示例 " + n + "）";
            String slug = "seed-post-" + n;
            String excerpt = "示例文章 " + n + "：" + titles[i % titles.length] + " 的要点总结与实践分享。";
            String content = "<p>" + excerpt + "</p><p>这是批量演示数据生成的正文内容，用于撑起博客列表、详情与搜索场景。文中包含 Vue、Java、MySQL 等关键词，便于检索演示。</p>";
            String status = (n % 7 == 0) ? "ARCHIVED" : (n % 2 == 0) ? "PUBLISHED" : "DRAFT";
            String category = cats[(n * 3) % cats.length];
            String tags = jsonArray(new String[]{"示例", category});
            int views = (n * 37) % 500 + 1;
            jdbc.update(
                "INSERT INTO blog_posts (user_id, title, slug, content, excerpt, status, category, tags, views, created_at, updated_at) "
                    + "VALUES (?,?,?,?,?,?,?,?,?,DATE_SUB(NOW(), INTERVAL ? DAY),NOW())",
                userId, title, slug, content, excerpt, status, category, tags, views, n % 120);
        }
        System.out.println("✅ blog_posts 补齐至 100");
    }

    private void scaleFiles(Long userId) {
        // 收回此前批量演示标记的“回收站”状态，保证 files 与 gallery 均为 100 条可展示数据
        // 回收站由用户在界面上操作产生
        jdbc.update("UPDATE files SET is_deleted = false WHERE user_id = ? AND is_deleted = true", userId);
        int cur = countRows("files", userId);
        int need = 100 - cur;
        if (need <= 0) { System.out.println("✅ files 已为 100"); return; }
        String[][] types = {{"文档", "docx"}, {"表格", "xlsx"}, {"图片", "png"}, {"视频", "mp4"}, {"音频", "mp3"}, {"演示", "pptx"}, {"PDF", "pdf"}};
        String[] folders = {"/文档", "/图片", "/视频", "/音频", "/表格", "/演示", "/设计", "/资料", "/归档"};
        for (int i = 0; i < need; i++) {
            int n = cur + i + 1;
            String[] t = types[i % types.length];
            String folder = folders[(n * 5) % folders.length];
            String name = "演示" + t[0] + n + "." + t[1];
            long size = (n * 7919L % 5000000L) + 2048L;
            jdbc.update(
                "INSERT INTO files (user_id, name, original_name, path, type, size, folder, is_starred, is_deleted, created_at, updated_at) "
                    + "VALUES (?,?,?,?,?,?,?,?,?,DATE_SUB(NOW(), INTERVAL ? DAY),NOW())",
                userId, name, name, folder + "/" + name, t[0], size, folder,
                n % 9 == 2, false, n % 60);
        }
        System.out.println("✅ files 补齐至 100");
    }

    private void scaleGallery(Long userId) {
        // 先剔除指向已删除文件的失效链接（无论当前数量）
        jdbc.update(
            "DELETE gm FROM gallery_media gm JOIN files f ON f.id = gm.file_id " +
                "WHERE gm.user_id = ? AND f.is_deleted = true", userId);
        int need = 100 - countRows("gallery_media", userId);
        if (need <= 0) { System.out.println("✅ gallery_media 已为 100（含清理失效链接）"); return; }
        java.util.List<Long> catIds = jdbc.queryForList(
            "SELECT id FROM gallery_categories WHERE user_id = ? ORDER BY id LIMIT 4", Long.class, userId);
        if (catIds.isEmpty()) return;
        // 循环补足：gallery 链接应指向未删除文件
        int i = 0;
        while (need > 0) {
            java.util.List<Long> fileIds = jdbc.queryForList(
                "SELECT f.id FROM files f WHERE f.user_id = ? AND f.is_deleted = false " +
                    "AND NOT EXISTS (SELECT 1 FROM gallery_media gm WHERE gm.user_id = f.user_id AND gm.file_id = f.id) " +
                    "ORDER BY f.id LIMIT ?",
                Long.class, userId, need);
            if (fileIds.isEmpty()) break;
            for (Long fid : fileIds) {
                jdbc.update("INSERT IGNORE INTO gallery_media (user_id, category_id, file_id) VALUES (?,?,?)",
                    userId, catIds.get(i % catIds.size()), fid);
                i++;
            }
            int cur = countRows("gallery_media", userId);
            need = 100 - cur;
        }
        System.out.println("✅ gallery_media 补齐至 100");
    }

    private void scaleTasks(Long userId) {
        int cur = countRows("tasks", userId);
        int need = 100 - cur;
        if (need <= 0) return;
        String[] statuses = {"TODO", "IN_PROGRESS", "DONE", "IN_PROGRESS", "DONE", "TODO"};
        String[] priorities = {"LOW", "MEDIUM", "HIGH", "URGENT"};
        String[] titles = {
            "编写测试用例", "评审需求文档", "发布公告弹窗", "优化首屏加载", "修复样式错位", "补充单元测试",
            "搭建监控大盘", "迁移数据库", "配置反向代理", "整理日志规范", "更新接口文档", "演练故障恢复",
            "排期迭代计划", "跟进客户反馈", "复盘周会数据", "审查代码合入", "压测核心接口", "巡检服务器",
            "整理设计规范", "跟进版权素材"
        };
        for (int i = 0; i < need; i++) {
            int n = cur + i + 1;
            String status = statuses[i % statuses.length];
            String priority = priorities[(n * 3) % priorities.length];
            int progress = status.equals("DONE") ? 100 : status.equals("IN_PROGRESS") ? 20 + (n % 60) : 0;
            LocalDate start = LocalDate.of(2026, 9, 1).plusDays(n % 40);
            LocalDate due = start.plusDays(7 + (n % 21));
            jdbc.update(
                "INSERT INTO tasks (user_id, title, description, status, priority, due_date, start_date, progress, created_at, updated_at) "
                    + "VALUES (?,?,?,?,?,?,?,?,DATE_SUB(NOW(), INTERVAL ? DAY),NOW())",
                userId, titles[i % titles.length] + "（任务 " + n + "）", "批量演示任务 " + n + " 的描述。", status, priority,
                java.sql.Date.valueOf(due), java.sql.Date.valueOf(start), progress, n % 50);
        }
        System.out.println("✅ tasks 补齐至 100");
    }

    private void scaleCalendarEvents(Long userId) {
        int cur = countRows("calendar_events", userId);
        int need = 100 - cur;
        if (need <= 0) return;
        String[] cats = {"工作", "客户", "活动", "个人", "会议"};
        String[] prios = {"LOW", "MEDIUM", "HIGH"};
        String[] titles = {"周例会", "需求评审", "代码走查", "客户回访", "产品迭代讨论", "团队晨会", "月度复盘", "方案宣讲", "进度同步", "专项培训"};
        for (int i = 0; i < need; i++) {
            int n = cur + i + 1;
            LocalDate day = LocalDate.of(2026, 9, 1).plusDays(n + 3);
            int hour = 9 + (n % 9);
            String start = day + "T" + String.format("%02d:00:00", hour);
            String end = day + "T" + String.format("%02d:30:00", hour + 1);
            jdbc.update(
                "INSERT INTO calendar_events (user_id, title, description, start_time, end_time, all_day, location, category, visibility, priority, created_at) "
                    + "VALUES (?,?,?,?,?,?,?,?,?,?,NOW())",
                userId, titles[i % titles.length] + "（事项 " + n + "）", "批量演示日程 " + n + "：" + titles[i % titles.length],
                start, end, n % 17 == 0, "会议室 " + (n % 9 + 1), cats[(n * 2) % cats.length],
                n % 5 == 0 ? "PRIVATE" : "PUBLIC", prios[n % prios.length]);
        }
        System.out.println("✅ calendar_events 补齐至 100");
    }

    private void scaleEmails(Long userId) {
        Integer c = jdbc.queryForObject(
            "SELECT COUNT(*) FROM emails WHERE from_user_id = ?", Integer.class, userId);
        int cur = c == null ? 0 : c;
        int need = 100 - cur;
        if (need <= 0) return;
        String[] folders = {"INBOX", "INBOX", "SENT", "DRAFT", "ARCHIVE", "SPAM", "TRASH", "INBOX", "INBOX", "SENT"};
        String[] senders = {"morgan@caoba.com", "huma@caoba.com", "charlie@caoba.com", "winston@caoba.com",
            "tom@caoba.com", "daniel@caoba.com", "kath@caoba.com", "caoba@caoba.com"};
        String[] subjects = {"项目进度同步", "本周排期确认", "需求变更说明", "发票开具提醒", "合同版本更新", "周报自动汇总",
            "上线通知", "故障复盘", "客户成功案例", "产品更新日志", "会议纪要分享", "招聘面试安排", "服务器巡检报告", "数据备份通知", "安全公告"};
        for (int i = 0; i < need; i++) {
            int n = cur + i + 1;
            String folder = folders[i % folders.length];
            String subject = subjects[i % subjects.length] + "（示例 " + n + "）";
            String body = "这是批量演示邮件 " + n + "，用于撑起邮件列表、搜索/筛选场景。正文提及 Vue、Java、Spring Boot 等关键词。";
            boolean read = n % 3 == 0;
            boolean star = n % 7 == 0;
            String from = (folder.equals("SENT") || folder.equals("DRAFT"))
                ? "admin@caoba.com" : senders[i % senders.length];
            KeyHolder kh = new GeneratedKeyHolder();
            final String fFolder = folder, fSubject = subject, fBody = body, fFrom = from;
            jdbc.update(conn -> {
                PreparedStatement ps = conn.prepareStatement(
                    "INSERT INTO emails (from_user_id, from_address, subject, body, is_read, is_starred, folder, created_at) "
                        + "VALUES (?,?,?,?,?,?,?,DATE_SUB(NOW(), INTERVAL ? DAY))",
                    Statement.RETURN_GENERATED_KEYS);
                ps.setLong(1, userId);
                ps.setString(2, fFrom);
                ps.setString(3, fSubject);
                ps.setString(4, fBody);
                ps.setBoolean(5, read);
                ps.setBoolean(6, star);
                ps.setString(7, fFolder);
                ps.setInt(8, n % 45);
                return ps;
            }, kh);
            if (folder.equals("INBOX")) {
                Long emailId = kh.getKey().longValue();
                jdbc.update("INSERT INTO email_recipients (email_id, user_id, address, type) VALUES (?,?,?,?)",
                    emailId, userId, "admin@caoba.com", "TO");
            }
        }
        System.out.println("✅ emails 补齐至 100");
    }

    /** 聊天：会话保持现状，消息补足至 100 条 */
    private void scaleChat(Long userId) {
        Integer mc = jdbc.queryForObject(
            "SELECT COUNT(*) FROM chat_messages WHERE conversation_id IN (SELECT id FROM chat_conversations WHERE created_by = ?)",
            Integer.class, userId);
        int cur = mc == null ? 0 : mc;
        int need = 100 - cur;
        if (need <= 0) return;
        java.util.List<Long> convIds = jdbc.queryForList(
            "SELECT id FROM chat_conversations WHERE created_by = ?", Long.class, userId);
        if (convIds.isEmpty()) return;
        String[] pool = {
            "好的，我确认一下细节。", "收到，今天内完成。", "统计数据已更新，请查收。", "报价单我再优化一版。",
            "会议纪要稍后发群里。", "这个需求我这边安排。", "进度已同步到看板。", "麻烦把附件再发一次。",
            "评审时间改到下午三点。", "测试环境已部署完成。", "记得明天提交周报。", "没问题，计划可行。",
            "风险项已登记并跟进。", "新版本刚发布，注意验证。", "这块我负责跟踪闭环。"
        };
        for (int i = 0; i < need; i++) {
            Long convId = convIds.get(i % convIds.size());
            Long sender = userId;
            if (i % 3 != 1) {
                try {
                    sender = jdbc.queryForObject(
                        "SELECT user_id FROM chat_members WHERE conversation_id = ? AND user_id <> ? LIMIT 1",
                        Long.class, convId, userId);
                } catch (Exception e) {
                    sender = userId;
                }
            }
            jdbc.update(
                "INSERT INTO chat_messages (conversation_id, sender_id, content, type, created_at) "
                    + "VALUES (?,?,?,?,DATE_SUB(NOW(), INTERVAL ? MINUTE))",
                convId, sender, pool[i % pool.length], "TEXT", 60 + i * 5);
        }
        System.out.println("✅ chat 消息补齐至 100");
    }

    /** 看板：卡片补足至 100 张（分布到各看板列） */
    private void scaleBoardCards(Long userId) {
        Integer c = jdbc.queryForObject(
            "SELECT COUNT(*) FROM board_cards WHERE board_id IN (SELECT id FROM boards WHERE user_id = ?)",
            Integer.class, userId);
        int cur = c == null ? 0 : c;
        int need = 100 - cur;
        if (need <= 0) return;
        java.util.List<java.util.Map<String, Object>> cols = jdbc.queryForList(
            "SELECT bc.id AS cid, bc.board_id AS bid FROM board_columns bc JOIN boards b ON b.id = bc.board_id WHERE b.user_id = ?",
            userId);
        if (cols.isEmpty()) return;
        String[] priorities = {"LOW", "MEDIUM", "HIGH", "URGENT"};
        String[] names = {"需求澄清", "接口设计", "原型输出", "视觉走查", "开发任务", "联调测试", "故障排查", "性能优化", "回归验证", "发布准备"};
        for (int i = 0; i < need; i++) {
            int n = cur + i + 1;
            java.util.Map<String, Object> col = cols.get(i % cols.size());
            Long cid = ((Number) col.get("cid")).longValue();
            Long bid = ((Number) col.get("bid")).longValue();
            LocalDate due = LocalDate.of(2026, 10, 1).plusDays(n % 30);
            jdbc.update(
                "INSERT INTO board_cards (column_id, board_id, title, description, priority, due_date, position, created_at) "
                    + "VALUES (?,?,?,?,?,?,?,DATE_SUB(NOW(), INTERVAL ? DAY))",
                cid, bid, names[i % names.length] + "（卡片 " + n + "）", "批量演示卡片 " + n + " 的描述。",
                priorities[n % priorities.length], java.sql.Date.valueOf(due), n % 5, n % 30);
        }
        System.out.println("✅ board_cards 补齐至 100");
    }
}
