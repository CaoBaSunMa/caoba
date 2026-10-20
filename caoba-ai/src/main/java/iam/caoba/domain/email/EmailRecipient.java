package iam.caoba.domain.email;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailRecipient {
    private Long id;
    private Long emailId;
    private Long userId;
    private String address;
    private String type;   // TO, CC, BCC
}
