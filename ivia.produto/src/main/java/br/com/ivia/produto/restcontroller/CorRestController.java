package br.com.ivia.produto.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ivia.model.model.Cor;
import br.com.ivia.produto.service.CorService;
import br.com.ivia.produto.to.CorTO;
import br.com.ivia.produto.to.MessageTO;

@RestController
@RequestMapping(path = "cor")
public class CorRestController {
	
	@Autowired
	private CorService corService;
	
	@PostMapping(path = "visualizarlistagem", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MessageTO> visualizarlistagem(@RequestBody CorTO corTO) {
		return new ResponseEntity<>(corService.findAll(corTO), HttpStatus.CREATED);
	}
	
	@GetMapping(path = "visualizardetalhes/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MessageTO> visualizardetalhes(@PathVariable("id") Integer id) {
		return new ResponseEntity<>(new MessageTO("Cor encontrada", true, corService.findById(id)), HttpStatus.OK);
	}

	@PostMapping(path = "incluir", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MessageTO> incluir(@RequestBody Cor cor) {
		return new ResponseEntity<>(new MessageTO("Cor salva com sucesso", true, corService.save(cor)),
				HttpStatus.CREATED);
	}

	@PutMapping(path = "alterar/{id}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MessageTO> alterar(@RequestBody Cor cor) {
		return new ResponseEntity<>(new MessageTO("Cor salva com sucesso", true, corService.save(cor)),
				HttpStatus.OK);
	}

}
