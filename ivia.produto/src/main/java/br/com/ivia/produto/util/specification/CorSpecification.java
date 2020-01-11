package br.com.ivia.produto.util.specification;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import br.com.ivia.model.model.Cor;
import br.com.ivia.produto.to.CorTO;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CorSpecification implements Specification<Cor>{

	private static final long serialVersionUID = 611670471853129260L;
	
	private CorTO criteria;

	@Override
	public Predicate toPredicate(Root<Cor> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
		Path<String> nome = root.get("nome");
		final List<Predicate> predicates = new ArrayList<>();	
		
		if (criteria.getNome() != null && !criteria.getNome().trim().isEmpty()) {
			predicates.add(criteriaBuilder.like(criteriaBuilder.lower(nome), "%" + criteria.getNome().trim().toLowerCase() + "%"));
		}

		return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
	}

}
