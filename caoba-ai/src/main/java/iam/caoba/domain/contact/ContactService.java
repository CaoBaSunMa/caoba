package iam.caoba.domain.contact;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository contactRepo;

    public Contact create(Contact contact) {
        if (contact.getFirstName() == null || contact.getFirstName().isBlank()) {
            throw new RuntimeException("鑱旂郴浜哄悕涓嶈兘涓虹┖");
        }
        if (contact.getLabels() == null) {
            contact.setLabels("[]");
        }
        Long id = contactRepo.insert(contact);
        return contactRepo.findById(id);
    }

    public Contact findById(Long id) {
        Contact contact = contactRepo.findById(id);
        if (contact == null) {
            throw new ResourceNotFoundException("鑱旂郴浜轰笉瀛樺湪: " + id);
        }
        return contact;
    }

    public List<Contact> findByUserId(Long userId) {
        return contactRepo.findByUserId(userId);
    }

    public List<Contact> findStarred(Long userId) {
        return contactRepo.findStarredByUserId(userId);
    }

    public List<Contact> findArchived(Long userId) {
        return contactRepo.findArchivedByUserId(userId);
    }

    public List<Contact> findAll(Long userId) {
        return contactRepo.findAllByUserId(userId);
    }

    public List<Contact> search(Long userId, String keyword) {
        if (keyword == null || keyword.isBlank()) {
            return contactRepo.findByUserId(userId);
        }
        return contactRepo.searchByUserId(userId, keyword.trim());
    }

    public List<Contact> findByLabel(Long userId, String label) {
        return contactRepo.findByUserIdAndLabel(userId, label);
    }

    public Contact update(Long id, Contact updated) {
        Contact existing = findById(id);
        if (updated.getFirstName() != null) existing.setFirstName(updated.getFirstName());
        if (updated.getLastName() != null) existing.setLastName(updated.getLastName());
        if (updated.getEmail() != null) existing.setEmail(updated.getEmail());
        if (updated.getPhone() != null) existing.setPhone(updated.getPhone());
        if (updated.getCompany() != null) existing.setCompany(updated.getCompany());
        if (updated.getPosition() != null) existing.setPosition(updated.getPosition());
        if (updated.getLocation() != null) existing.setLocation(updated.getLocation());
        if (updated.getAvatar() != null) existing.setAvatar(updated.getAvatar());
        if (updated.getNotes() != null) existing.setNotes(updated.getNotes());
        if (updated.getLabels() != null) existing.setLabels(updated.getLabels());
        contactRepo.update(existing);
        return contactRepo.findById(id);
    }

    public void delete(Long id) {
        findById(id);
        contactRepo.deleteById(id);
    }

    /** 鍒囨崲鏄熸爣鐘舵€佸苟杩斿洖鏇存柊鍚庣殑鑱旂郴浜?*/
    public Contact toggleStar(Long id) {
        Contact contact = findById(id);
        contactRepo.setStarred(id, !contact.isStarred());
        return contactRepo.findById(id);
    }

    /** 褰掓。 */
    public Contact archive(Long id) {
        findById(id);
        contactRepo.setArchived(id, true);
        return contactRepo.findById(id);
    }

    /** 鎭㈠褰掓。 */
    public Contact restore(Long id) {
        findById(id);
        contactRepo.setArchived(id, false);
        return contactRepo.findById(id);
    }

    /** 灞忚斀锛堝睆钄藉唴瀹癸級 */
    public Contact block(Long id) {
        findById(id);
        contactRepo.setBlocked(id, true);
        return contactRepo.findById(id);
    }

    /** 瑙ｉ櫎灞忚斀 */
    public Contact unblock(Long id) {
        findById(id);
        contactRepo.setBlocked(id, false);
        return contactRepo.findById(id);
    }

    /**
     * Add a label to contact (append to JSON array if not present).
     */
    public Contact addLabel(Long id, String label) {
        Contact contact = findById(id);
        String labels = contact.getLabels();
        if (labels == null || labels.isBlank()) {
            labels = "[]";
        }
        if (!labels.contains("\"" + label + "\"")) {
            if (labels.equals("[]")) {
                labels = "[\"" + label + "\"]";
            } else {
                labels = labels.substring(0, labels.length() - 1) + ",\"" + label + "\"]";
            }
            contact.setLabels(labels);
            contactRepo.update(contact);
        }
        return contactRepo.findById(id);
    }

    /**
     * Remove a label from contact.
     */
    public Contact removeLabel(Long id, String label) {
        Contact contact = findById(id);
        String labels = contact.getLabels();
        if (labels == null) return contact;
        labels = labels.replace("\"" + label + "\"", "").replace(",,", ",").replace("[,", "[").replace(",]", "]");
        if (labels.isBlank() || labels.equals("[")) labels = "[]";
        contact.setLabels(labels);
        contactRepo.update(contact);
        return contactRepo.findById(id);
    }
}
