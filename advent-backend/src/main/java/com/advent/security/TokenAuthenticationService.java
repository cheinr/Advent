package com.advent.security;

import com.advent.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by colin on 10/19/16.
 * more stuff from tutorial.
 */
@Component
public class TokenAuthenticationService {

    //The header in the request that contains the google-id token.
    private static final String AUTH_HEADER_NAME = "Authorization";

    @Autowired
    private TokenHandler tokenHandler;

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

