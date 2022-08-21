package com.toyproject.lookatmybaby;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

//@SpringBootApplication
//public class LookatmybabyApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(LookatmybabyApplication.class, args);
//	}
//
//}
@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class LookatmybabyApplication {

	public static void main(String[] args) {
		SpringApplication.run(LookatmybabyApplication.class, args);
	}

}