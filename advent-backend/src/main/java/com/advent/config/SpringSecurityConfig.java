package com.advent.config;

import com.advent.security.StatelessAuthenticationFilter;
import com.advent.security.TokenAuthenticationService;
import com.advent.service.UserManagementServiceImpl;
import com.advent.service.interfaces.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Created by colin on 10/19/16.
 * This is the configuration for spring security that I'm basing off of a tutorial I found.
 */
@Configuration
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private final UserManagementServiceImpl userService;

    @Autowired
    private final TokenAuthenticationService tokenAuthenticationService;

    public SpringSecurityConfig() {
        super(true);
        this.userService = new UserManagementServiceImpl();
        tokenAuthenticationService = new TokenAuthenticationService("secret key", userService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        System.out.println("handling security config.");
        http
                .exceptionHandling().and()
                .anonymous().and()
                .servletApi().and()
                // .headers().cacheControl().and()*/
                .authorizeRequests()

                // Allow anonymous logins
                .antMatchers("/api/auth/**").permitAll()

                // All other request need to be authenticated
                .anyRequest().authenticated().and()

                // Custom Token based authentication based on the header previously given to the client
                .addFilterBefore(new StatelessAuthenticationFilter(tokenAuthenticationService),
                           UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService()).passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    /*
    @Bean
    @Override
    public UserManagementServiceImpl userDetailsService() {
        return this.userService;
    }
    */

    @Bean
    public TokenAuthenticationService tokenAuthenticationService() {
        return tokenAuthenticationService;
    }
}


