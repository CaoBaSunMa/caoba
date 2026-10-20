package iam.caoba.domain.integration;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Integration {

    public enum Status { CONNECTED, DISCONNECTED }

    private Long id;
    private Long userId;
    private String appName;
    private String appIcon;
    private String category;
    private Status status;
    private String config;   // JSON string
    private LocalDateTime connectedAt;
    private LocalDateTime createdAt;
}
