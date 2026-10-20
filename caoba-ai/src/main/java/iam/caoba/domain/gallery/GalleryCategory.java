package iam.caoba.domain.gallery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GalleryCategory {

    private Long id;
    private Long userId;
    private String name;
    private LocalDateTime createdAt;
}
