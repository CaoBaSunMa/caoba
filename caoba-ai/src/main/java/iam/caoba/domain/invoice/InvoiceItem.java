package iam.caoba.domain.invoice;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvoiceItem {

    private Long id;
    private Long invoiceId;
    private String title;            // 椤圭洰鍚嶇О
    private String description;      // 椤圭洰鎻忚堪
    private Integer quantity;
    private BigDecimal unitPrice;
    private BigDecimal discount;     // 鎶樻墸閲戦鎴栨姌鎵ｇ巼
    private String discountType;     // per=鐧惧垎姣? cur=鍥哄畾閲戦
    private BigDecimal amount;       // 琛岄噾棰濓紙鎶樻墸鍚庡悎璁★級
}