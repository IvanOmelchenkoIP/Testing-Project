package com.testingproject.auth.configuration;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfig {

	@Value("${spring.mail.host}")
	private String mailHost;
	@Value("${spring.mail.port}")
	private int mailPort;
	@Value("${spring.mail.username}")
	private String mailUsername;
	@Value("${spring.mail.password}")
	private String mailPassword;
	
	@Value("${spring.mail.properties.mail.transport.protocol}")
	private String mailPropProtocol;
	@Value("${spring.mail.properties.mail.smtp.auth}")
	private String mailPropSmtpAuth;
	@Value("${spring.mail.password}")
	private String mailPropsStarttls;
	
	@Bean
	public JavaMailSender javaMailSender() {
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setHost(mailHost);
	    mailSender.setPort(mailPort);
	    mailSender.setUsername(mailUsername);
	    mailSender.setPassword(mailPassword);
	    
	    Properties properties = mailSender.getJavaMailProperties();
	    properties.put("mail.transport.protocol", mailPropProtocol);
	    properties.put("mail.smtp.auth", mailPropSmtpAuth);
	    properties.put("mail.smtp.starttls.enable", mailPropsStarttls);
	    
		return mailSender;
	}
}
