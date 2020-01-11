package br.com.ivia.model.to;

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

	private static final long serialVersionUID = 3743612038252112693L;

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
