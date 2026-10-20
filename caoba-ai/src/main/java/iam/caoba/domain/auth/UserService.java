package iam.caoba.domain.auth;

import iam.caoba.common.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public User register(RegisterRequest req) {
        if (userRepo.findByUsername(req.getUsername()) != null) {
            throw new RuntimeException("用户名已存在");
        }
        if (userRepo.findByEmail(req.getEmail()) != null) {
            throw new RuntimeException("邮箱已注册");
        }
        User user = User.builder()
                .username(req.getUsername())
                .email(req.getEmail())
                .password(passwordEncoder.encode(req.getPassword()))
                .fullName(req.getFullName())
                .role("USER")
                .enabled(true)
                .build();
        Long id = userRepo.insert(user);
        user.setId(id);
        return user;
    }

    public User findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    public User findById(Long id) {
        return userRepo.findById(id);
    }

    public List<User> findAll() {
        return userRepo.findAll();
    }

    public void updateProfile(Long id, String fullName, String avatar, String phone) {
        User user = userRepo.findById(id);
        if (user == null) throw new ResourceNotFoundException("用户不存在");
        user.setFullName(fullName);
        user.setAvatar(avatar);
        user.setPhone(phone);
        userRepo.update(user);
    }
}
