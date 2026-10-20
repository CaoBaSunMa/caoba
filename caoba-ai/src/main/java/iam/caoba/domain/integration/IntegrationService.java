package iam.caoba.domain.integration;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class IntegrationService {

    private final IntegrationRepository integrationRepository;

    public List<Integration> listByUser(Long userId) {
        return integrationRepository.findByUserId(userId);
    }

    public List<Integration> listConnected(Long userId) {
        return integrationRepository.findByUserIdAndStatus(userId, Integration.Status.CONNECTED);
    }

    public List<Integration> listDisconnected(Long userId) {
        return integrationRepository.findByUserIdAndStatus(userId, Integration.Status.DISCONNECTED);
    }

    public Integration getById(Long id) {
        return integrationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Integration not found: " + id));
    }

    public Integration create(Integration integration) {
        if (integration.getStatus() == null) {
            integration.setStatus(Integration.Status.DISCONNECTED);
        }
        integration.setCreatedAt(LocalDateTime.now());
        Long id = integrationRepository.insert(integration);
        integration.setId(id);
        return integration;
    }

    public Integration update(Long id, Integration updates) {
        Integration existing = getById(id);
        if (updates.getAppName() != null) existing.setAppName(updates.getAppName());
        if (updates.getAppIcon() != null) existing.setAppIcon(updates.getAppIcon());
        if (updates.getCategory() != null) existing.setCategory(updates.getCategory());
        if (updates.getConfig() != null) existing.setConfig(updates.getConfig());
        integrationRepository.update(existing);
        return existing;
    }

    public Integration connect(Long id) {
        Integration integration = getById(id);
        integration.setStatus(Integration.Status.CONNECTED);
        integration.setConnectedAt(LocalDateTime.now());
        integrationRepository.update(integration);
        return integration;
    }

    public Integration disconnect(Long id) {
        Integration integration = getById(id);
        integration.setStatus(Integration.Status.DISCONNECTED);
        integration.setConnectedAt(null);
        integrationRepository.update(integration);
        return integration;
    }

    public void delete(Long id) {
        integrationRepository.deleteById(id);
    }
}
