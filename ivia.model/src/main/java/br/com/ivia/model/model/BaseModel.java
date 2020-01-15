package br.com.ivia.model.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@JsonInclude(Include.NON_NULL)
@Data
@NoArgsConstructor @ToString @EqualsAndHashCode(callSuper=false)
public abstract class BaseModel implements Serializable {

	private static final long serialVersionUID = 5110924740399816770L;

}
