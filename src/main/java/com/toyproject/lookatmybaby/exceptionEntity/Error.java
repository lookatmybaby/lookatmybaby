package com.toyproject.lookatmybaby.exceptionEntity;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;

@Data
@Slf4j
public class Error {
  private final HttpStatus httpStatus;
  private final String message;

  public Error(HttpStatus httpStatus, String message){
    this.httpStatus = httpStatus;
    this.message = message;

    if(httpStatus.is4xxClientError()){
      log.warn("exception : " + httpStatus +"//"+ message);
    } else if(httpStatus.is5xxServerError()) {
      log.error("exception : " + httpStatus +"//"+  message);
    }
  }
}
