package com.advent.security;

import com.advent.dto.UserDTO;
import com.advent.entity.User;
import com.advent.service.UserManagementServiceImpl;
import com.advent.service.interfaces.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by colin on 10/19/16.
 * more stuff from tutorial.
 */
@Component
public class TokenAuthenticationService {

    private static final String AUTH_HEADER_NAME = "Authorization";

    @Autowired
    private TokenHandler tokenHandler;

    public TokenAuthenticationService(String secret, UserManagementService userService) {
        tokenHandler = new TokenHandler(userService);
    }


    public Authentication getAuthentication(HttpServletRequest request) {
        final String token = request.getHeader(AUTH_HEADER_NAME);
        if (token != null) {
            final UserDTO user = tokenHandler.parseUserFromToken(token);
            if (user != null) {
                return new UserAuthentication(user);
            }
        }
        return null;
    }
}

