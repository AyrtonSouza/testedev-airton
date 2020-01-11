
INSERT INTO producao.pessoa (id, nome, email, cpf, dt_nascimento, nu_identidade, endereco, endereco_nu, cep, situacao_id, senha) VALUES ( 1, 'IVIA', 'ivia@ivia.com', '430.460.023-00', '2019-01-02', '12121212', 'Rua 01', '1212', '65287000', 0, '4297f44b13955235245b2497399d7a93');
INSERT INTO producao.pessoa_perfil VALUES (1, 1, 1, '2018-12-11', NULL);
INSERT INTO producao.tipologia ( id, nome, situacao, sigla ) VALUES ( 1, 'ALIMENTOS E BEBIDAS', 0, 'ALB' );
INSERT INTO producao.tecnica ( id, nome, situacao ) VALUES ( 1, 'AMARRADINHO', 0 );
INSERT INTO producao.tipologia_tecnica ( id, idtipologia, idtecnica, qtde_mes, unidade_medida ) VALUES ( 1, 1, 1, 30, 1 );

INSERT INTO producao.produto ( id, nome, id_tipologia_tecnica, situacao, codigo, data_cadastro, id_grupo_produto,id_materia_prima,id_classificacao,id_funcionalidade,id_pessoa_cadastro ) VALUES ( 1, 'Produto 1', 1, 0, '021568745', '2017-04-05', 1, 1, 1, 1, 1 );
INSERT INTO producao.produto ( id, nome, id_tipologia_tecnica, situacao, codigo, data_cadastro, id_grupo_produto,id_materia_prima,id_classificacao,id_funcionalidade,id_pessoa_cadastro ) VALUES ( 2, 'Produto 2', 1, 0, '021568743', '2017-04-05', 1, 1, 1, 1, 1 );
INSERT INTO producao.produto ( id, nome, id_tipologia_tecnica, situacao, codigo, data_cadastro, id_grupo_produto,id_materia_prima,id_classificacao,id_funcionalidade,id_pessoa_cadastro ) VALUES ( 3, 'Produto 3', 1, 0, '021568742', '2017-04-05', 1, 1, 1, 1, 1 );

INSERT INTO producao.artesao (id, cpf, data_cadastro, nome, contribui_previdencia, cor_raca, dependentes_economicos, possui_deficiencia, instrutor_tecnica, vinculo_grupo, numero_carteira) VALUES ( 56898, '727.100.983-34', '2019-01-01', 'ANTONIO CARLOS DE OLIVEIRA DO NASCIMENTO', false, 0, false, false,  false, false, 13489 );

INSERT INTO producao.produto_artesanal ( id, data_associacao, comercializacao, usuario_id, produto_id, artesao_id) VALUES ( 1, '2017-01-29', true, 1, 1, 56898);
INSERT INTO producao.produto_artesanal ( id, data_associacao, comercializacao, usuario_id, produto_id, artesao_id) VALUES ( 2, '2017-01-29', true, 1, 2, 56898);
INSERT INTO producao.produto_artesanal ( id, data_associacao, comercializacao, usuario_id, produto_id, artesao_id) VALUES ( 3, '2017-01-29', true, 1, 3, 56898);

INSERT INTO 
  producao.historico_produto_artesanal
(
  id,
  valor_compra,
  id_produto_artesanal,
  data_atualizacao,
  usuario_responsavel,
  estornado
)
VALUES (
  1,
  10,
  1,
  '2019-04-16',
  1,
  false
);