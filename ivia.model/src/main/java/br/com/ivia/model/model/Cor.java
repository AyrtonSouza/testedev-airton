package br.com.ivia.model.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.*;

import java.util.Date;

@Entity
@Table(name = "cor", schema = "producao")
@JsonInclude(Include.NON_NULL)
@SequenceGenerator(name = "seq_cor", sequenceName = "producao.cor_id_seq", allocationSize = 1)
@Data
@NoArgsConstructor @ToString @EqualsAndHashCode(callSuper=false)
public class Cor extends BaseModel {

	private static final long serialVersionUID = -8208870989585485594L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="seq_cor")
	@Column(name="id",nullable=false,unique=true)
	private Integer id;
	
	@Column(name="nome",nullable=false,length=100)
	private String nome;

	@Column(name = "data_de_cadastro", nullable = false)
	@Temporal(TemporalType.DATE)
	private Date data_de_cadastro;

	@Column(name="situacao", nullable = false)
	private Boolean situacao;
}
