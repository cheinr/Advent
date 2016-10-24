package com.advent.security;

import com.advent.dto.UserDTO;
import com.advent.entity.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

/**
 * Created by colin on 10/19/16.
 */
public class UserAuthentication implements Authentication {

    private final UserDTO userDTO;
    private boolean authenticated = true;

    public UserAuthentication(UserDTO userDTO) {
        this.userDTO = userDTO;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //TODO - we could store user authorities for access to certain endpoints.
        return null;
    }

    @Override
    public Object getCredentials() {
        //We don't store user credentials.
        return null;
    }

    @Override
    public UserDTO getDetails() {
        return userDTO;
    }

    @Override
    //I have no idea what principal is supposed to be...
    //but in the tutorial they returned username
    public Object getPrincipal() {
        return userDTO.getDisplayName();
    }

    @Override
    public boolean isAuthenticated() {
        return authenticated;
    }

    @Override
    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
        this.authenticated = isAuthenticated;
    }

    @Override
    public String getName() {
        return userDTO.getDisplayName();
    }
}
