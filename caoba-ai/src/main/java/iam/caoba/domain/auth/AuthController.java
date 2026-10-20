package iam.caoba.domain.auth;

import iam.caoba.common.ApiResponse;
import iam.caoba.security.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authManager;
    private final UserDetailsService userDetailsService;
    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping("/register")
    public ApiResponse<?> register(@Valid @RequestBody RegisterRequest req) {
        User user = userService.register(req);
        UserDetails ud = userDetailsService.loadUserByUsername(user.getUsername());
        String token = jwtService.generateToken(user.getId(), ud);
        String refresh = jwtService.generateRefreshToken(user.getId(), ud);
        return ApiResponse.ok(Map.of("token", token, "refreshToken", refresh, "user", toDto(user)));
    }

    @PostMapping("/login")
    public ApiResponse<?> login(@Valid @RequestBody LoginRequest req) {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword()));
        UserDetails ud = userDetailsService.loadUserByUsername(req.getUsername());
        User user = userService.findByUsername(req.getUsername());
        String token = jwtService.generateToken(user.getId(), ud);
        String refresh = jwtService.generateRefreshToken(user.getId(), ud);
        return ApiResponse.ok(Map.of("token", token, "refreshToken", refresh, "user", toDto(user)));
    }

    @PostMapping("/refresh")
    public ApiResponse<?> refresh(@RequestBody Map<String, String> body) {
        String refresh = body.get("refreshToken");
        String username = jwtService.extractUsername(refresh);
        UserDetails ud = userDetailsService.loadUserByUsername(username);
        User user = userService.findByUsername(username);
        String token = jwtService.generateToken(user.getId(), ud);
        return ApiResponse.ok(Map.of("token", token));
    }

    @GetMapping("/me")
    public ApiResponse<?> me(@RequestAttribute("userId") Long userId) {
        User user = userService.findById(userId);
        return ApiResponse.ok(toDto(user));
    }

    private Map<String, Object> toDto(User u) {
        return Map.of("id", u.getId(), "username", u.getUsername(), "email", u.getEmail(),
                "fullName", u.getFullName(), "avatar", u.getAvatar() != null ? u.getAvatar() : "",
                "role", u.getRole());
    }
}
