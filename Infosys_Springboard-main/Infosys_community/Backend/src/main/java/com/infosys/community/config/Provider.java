package com.infosys.community.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class Provider {
    private static SecretKey key = Keys.hmacShaKeyFor(Constants_JWT.SECRET_STRING.getBytes());
    private static final String ISSUER = "CommunityManagementSystem";  // Changed issuer name

    public static String generateToken(Authentication auth) {
        String jwt = Jwts.builder()
                .setIssuer(ISSUER)  // Using the new issuer name
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + 86400000)) // token expiration time (1 day)
                .claim("email", auth.getName())  // Claim for the email
                .signWith(key)
                .compact();
        return jwt;
    }

    public static String getEmailFromJwtToken(String jwt) {
        // Bearer token
        jwt = jwt.substring(7);  // Removing "Bearer " prefix
        Claims claims = Jwts.parser().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
        String email = String.valueOf(claims.get("email"));
        return email;
    }
}
