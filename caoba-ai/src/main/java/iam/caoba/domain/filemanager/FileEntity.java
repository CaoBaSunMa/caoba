package iam.caoba.domain.filemanager;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FileEntity {

    private Long id;
    private Long userId;
    private String name;
    private String originalName;
    private String path;
    private String type;
    private Long size;
    private String folder;
    private Boolean isStarred;
    private Boolean isDeleted;
    private Boolean onDisk;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
