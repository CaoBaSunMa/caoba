package iam.caoba.domain.blog;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BlogPost {

    public enum Status { DRAFT, PUBLISHED, ARCHIVED }

    private Long id;
    private Long userId;
    private String title;
    private String slug;
    private String content;
    private String excerpt;
    private String coverImage;
    private Status status;
    private String category;
    private String tags;     // JSON string
    private String seoTitle;
    private String seoDescription;
    private Integer views;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
