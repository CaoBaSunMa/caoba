package iam.caoba.domain.invoice;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Invoice {

    public enum Status { DRAFT, SENT, PAID, OVERDUE }

    public enum Kind { INVOICE, ESTIMATE }

    private Long id;
    private Long userId;
    private String invoiceNumber;
    private String clientName;
    private String clientEmail;
    private Status status;
    private BigDecimal subtotal;
    private BigDecimal discount;
    private BigDecimal tax;
    private BigDecimal total;
    private String currency;
    private LocalDate dueDate;
    private String notes;
    private String template;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // ── 扩展字段 ──
    private LocalDate issueDate;       // 开票日期
    private String clientCode;         // 客户编号
    private String clientAddress;      // 客户地址
    private String tags;               // 名称与标签（JSON 数组字符串）
    private String terms;              // 付款与条款
    private String memo;               // 个人备注
    private Kind kind;                 // INVOICE / ESTIMATE
    private boolean archived;          // 已归档
    private boolean deleted;           // 已删除（软删除）
}
