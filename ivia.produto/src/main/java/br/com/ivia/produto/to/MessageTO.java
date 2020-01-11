package br.com.ivia.produto.to;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MessageTO<E extends Serializable> implements Serializable {

	private static final long serialVersionUID = -7663616751075935470L;

	private String message;

    private Boolean success;

    private long numberOfElements;

    private E response;

    public MessageTO(String message, Boolean success, E response) {
        super();
        this.message = message;
        this.success = success;
        this.response = response;
    }

}
