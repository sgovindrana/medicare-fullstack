package com.govind.authentication.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.govind.authentication.model.User;
import com.govind.authentication.repository.UserRepository;

@Service
public class AppUserDetailsService implements UserDetailsService {

                @Autowired
                UserRepository userRepository;

                @Override
                public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                	
                                User user = userRepository.findByUsername(username);
                                
                                if(user==null){
                                                throw new UsernameNotFoundException("Exception user name not found");
                                }
                                else
                                {
                                                AppUser appUser=new AppUser(user);
                                                return appUser;
                                }
                                
                }

}

