package br.com.ivia.produto.to;

import java.io.Serializable;

import org.springframework.data.domain.Sort.Direction;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CorTO implements Serializable{
	
	private static final long serialVersionUID = 736300081709594291L;
	
	private String nome;	
	private Integer id;	

	private Integer pageNumber;
	private Integer pageSize;
	private Direction direction;
	private String[] by;
}
