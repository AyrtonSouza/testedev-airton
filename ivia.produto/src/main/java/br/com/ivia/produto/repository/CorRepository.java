package br.com.ivia.produto.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.ivia.model.model.Cor;

@Repository
public interface CorRepository extends PagingAndSortingRepository<Cor, Integer>, JpaSpecificationExecutor<Cor> {

}