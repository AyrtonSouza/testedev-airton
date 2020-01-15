package br.com.ivia.produto.to;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.data.domain.Sort.Direction;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.io.Serializable;
import java.util.Date;

@Data
public class CorTO implements Serializable{
	
	private static final long serialVersionUID = 736300081709594291L;
	
	private String nome;	
	private Integer id;

	@Temporal(TemporalType.DATE)
	private Date data_de_cadastro;
	private Boolean situacao;

	private Integer pageNumber;
	private Integer pageSize;
	private Direction direction;
	private String[] by;
}
