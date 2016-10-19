package com.advent.security;

import com.advent.entity.User;
import com.advent.service.UserManagementServiceImpl;
import com.advent.service.interfaces.UserManagementService;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by colin on 10/19/16.
 * more stuff from tutorial.
 */

public class TokenAuthenticationService {

    //TODO - change this
    private static final String AUTH_HEADER_NAME = "X-AUTH-TOKEN";

    private final TokenHandler tokenHandler;

    public TokenAuthenticationService(String secret, UserManagementService userService) {
        tokenHandler = new TokenHandler(secret, userService);
    }

    //Shouldn't need this as user will get tokens from google
    /*
    public void addAuthentication(HttpServletResponse response, UserAuthentication authentication) {
        final User user = authentication.getDetails();
        response.addHeader(AUTH_HEADER_NAME, tokenHandler.createTokenForUser(user));
    }
    */

    public Authentication getAuthentication(HttpServletRequest request) {
        final String token = request.getHeader(AUTH_HEADER_NAME);
        if (token != null) {
            final User user = tokenHandler.parseUserFromToken(token);
            if (user != null) {
                return new UserAuthentication(user);
            }
        }
        return null;
    }
}

