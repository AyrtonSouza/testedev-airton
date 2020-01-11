package br.com.ivia.produto.util.message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:message.properties")
public class Message {

	@Autowired
	private Environment environment;

	public String get(String key) {
		return environment.getProperty(key);
	}

}
