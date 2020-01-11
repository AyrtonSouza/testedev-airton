package br.com.ivia.produto.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import br.com.ivia.model.model.Cor;
import br.com.ivia.produto.repository.CorRepository;
import br.com.ivia.produto.to.CorTO;
import br.com.ivia.produto.to.MessageTO;
import br.com.ivia.produto.util.exception.ProdutoException;
import br.com.ivia.produto.util.message.Message;
import br.com.ivia.produto.util.specification.CorSpecification;

@Service
public class CorService {

	@Autowired
	private CorRepository repository;
	
	@Autowired
	private Message message;
	
	public List<Cor> findAll() {
		List<Cor> list = Lists.newArrayList(repository.findAll());
		if (list == null || list.isEmpty()) {
			throw new ProdutoException(this.message.get("corService.error.01"));
		}
		return list;
	}
	
	public MessageTO<ArrayList<Cor>> findAll(CorTO corTO) {
		CorSpecification specification = new CorSpecification(corTO);
		PageRequest pageRequest = PageRequest.of(corTO.getPageNumber() - 1, corTO.getPageSize(),
				new Sort(corTO.getDirection(), corTO.getBy()));
		Page<Cor> page = repository.findAll(specification, pageRequest);
		List<Cor> cores = page.getContent();
		return new MessageTO<>(this.message.get("corRest.success.01"), true, page.getTotalElements(), new ArrayList<>(cores));
	}
	
	public Cor save(Cor cor) {
		return repository.save(cor);
	}

	public Cor findById(Integer id) {
		Optional<Cor> cor = repository.findById(id);
		if (!cor.isPresent()) {
			throw new ProdutoException(this.message.get("corService.error.02"));
		}

		return cor.get();
	}
}
