package com.govind.medicare.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	private static final Logger LOGGER = LoggerFactory.getLogger(SecurityConfig.class);

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		
		
		System.out.println("start sec-config 0002");
	              httpSecurity.cors();
	          	  httpSecurity.csrf().disable().httpBasic().and().authorizeRequests().antMatchers("/medicare").permitAll()
	          	  	.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().antMatchers("/users").permitAll()
	          	  .antMatchers(HttpMethod.OPTIONS, "/**").permitAll().antMatchers("/users/admin").permitAll()
	          	 .antMatchers(HttpMethod.OPTIONS, "/**").permitAll().antMatchers("/users/doctor").permitAll()
	          	.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().antMatchers("/users/patient").permitAll()
	          	.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().antMatchers("/medicare/doctor").permitAll()
	          	.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().antMatchers("/medicare/patient").permitAll()
	          	.antMatchers(HttpMethod.PUT, "/**").permitAll().antMatchers("/medicare/patient").permitAll()
	          	.antMatchers(HttpMethod.GET, "/**").permitAll().antMatchers("/medicare/medicalTestHistory").permitAll()
	          	.antMatchers(HttpMethod.PUT, "/**").permitAll().antMatchers("/medicare/saveReport").permitAll()
	  				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated().and()
	  				.addFilter(new JwtAuthorizationFilter(authenticationManager()));
	}

}
