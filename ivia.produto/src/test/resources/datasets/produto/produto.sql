
INSERT INTO acesso.recurso VALUES (12, 'Solicitação de Reajuste', 'solicitacaoreajuste');

INSERT INTO acesso.acao VALUES (6, 'Visualização', true, 'visualizardetalhes');
INSERT INTO acesso.acao VALUES (7, 'Impressão da Listagem', true, 'imprimirlistagem');
INSERT INTO acesso.acao VALUES (8, 'Consultar', true, 'visualizarlistagem');
INSERT INTO acesso.acao VALUES (12, 'Cancelar Solicitação Reajuste', true, 'cancelarsolicitacaoreajuste');
INSERT INTO acesso.acao VALUES (13, 'Analisar Solicitação de Reajuste', true, 'analisarsolicitacaoreajuste');

INSERT INTO acesso.recurso_acao VALUES (63, 12, 12);
INSERT INTO acesso.recurso_acao VALUES (64, 12, 13);
INSERT INTO acesso.recurso_acao VALUES (65, 12, 6);
INSERT INTO acesso.recurso_acao VALUES (67, 12, 8);
INSERT INTO acesso.recurso_acao VALUES (68, 12, 7);

INSERT INTO producao.motivo_situacao(  id,  id_recurso,  situacao,  descricao,  ativo) VALUES (  1,  12,  1,  'TESTE',  true);

INSERT INTO producao.tipologia ( id, nome, situacao, sigla ) VALUES ( 1, 'ALIMENTOS E BEBIDAS', 0, 'ALB' );
INSERT INTO producao.tecnica ( id, nome, situacao ) VALUES ( 1, 'AMARRADINHO', 0 );
INSERT INTO producao.tipologia_tecnica ( id, idtipologia, idtecnica, qtde_mes, unidade_medida ) VALUES ( 1, 1, 1, 30, 1 );

INSERT INTO producao.tipologia ( id, nome, situacao, sigla ) VALUES ( 2, 'TESTE TIPOLOGIA', 0, 'ALB' );
INSERT INTO producao.tecnica ( id, nome, situacao ) VALUES ( 2, 'TESTE TECNICA', 0 );
INSERT INTO producao.tipologia_tecnica ( id, idtipologia, idtecnica, qtde_mes, unidade_medida ) VALUES ( 2, 2, 2, 30, 1 );

INSERT INTO producao.grupo_produto ( id, nome) VALUES ( 1, 'TESTE');
INSERT INTO producao.materia_prima ( id, nome, situacao ) VALUES ( 1, 'AÇO', true );
INSERT INTO producao.materia_prima ( id, nome, situacao ) VALUES ( 3, 'ALGODÃO', true );

INSERT INTO producao.classificacao ( id, nome ) VALUES ( 1, 'TESTE');
INSERT INTO producao.funcionalidade ( id, nome, ativo ) VALUES ( 1, 'TESTE', true );

INSERT INTO producao.produto ( id, nome, id_tipologia_tecnica, situacao, codigo, data_cadastro, id_grupo_produto, id_materia_prima, id_classificacao, id_funcionalidade ) VALUES ( 1, 'Produto 1', 1, 0, '021568745', '2017-04-05', 1, 1, 1, 1 );
INSERT INTO producao.produto ( id, nome, id_tipologia_tecnica, situacao, codigo, data_cadastro, id_grupo_produto, id_materia_prima, id_classificacao, id_funcionalidade ) VALUES ( 2, 'Produto 2', 2, 0, '021568749', '2017-04-05', 1, 3, 1, 1 );
