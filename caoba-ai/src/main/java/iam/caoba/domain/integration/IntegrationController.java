package iam.caoba.domain.integration;

import iam.caoba.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/integrations")
@RequiredArgsConstructor
public class IntegrationController {

    private final IntegrationService integrationService;

    @GetMapping
    public ApiResponse<List<Integration>> list(@RequestAttribute("userId") Long userId) {
        return ApiResponse.ok(integrationService.listByUser(userId));
    }

    @PostMapping
    public ApiResponse<Integration> create(@RequestAttribute("userId") Long userId, @RequestBody Integration integration) {
        integration.setUserId(userId);
        return ApiResponse.ok("Integration created", integrationService.create(integration));
    }

    @GetMapping("/{id}")
    public ApiResponse<Integration> getById(@PathVariable Long id) {
        return ApiResponse.ok(integrationService.getById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<Integration> update(@PathVariable Long id, @RequestBody Integration integration) {
        return ApiResponse.ok("Integration updated", integrationService.update(id, integration));
    }

    @PutMapping("/{id}/connect")
    public ApiResponse<Integration> connect(@PathVariable Long id) {
        return ApiResponse.ok("Connected", integrationService.connect(id));
    }

    @PutMapping("/{id}/disconnect")
    public ApiResponse<Integration> disconnect(@PathVariable Long id) {
        return ApiResponse.ok("Disconnected", integrationService.disconnect(id));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable Long id) {
        integrationService.delete(id);
        return ApiResponse.ok("Integration deleted", null);
    }
}
