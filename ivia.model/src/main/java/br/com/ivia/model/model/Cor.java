package br.com.ivia.model.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "cor", schema = "producao")
@JsonInclude(Include.NON_NULL)
@SequenceGenerator(name = "seq_cor", sequenceName = "producao.cor_id_seq", allocationSize = 1)
@Getter @Setter @NoArgsConstructor @ToString @EqualsAndHashCode(callSuper=false)
public class Cor extends BaseModel {

	private static final long serialVersionUID = -8208870989585485594L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="seq_cor")
	@Column(name="id",nullable=false,unique=true)
	private Integer id;
	
	@Column(name="nome",nullable=false,length=100)
	private String nome;
}
