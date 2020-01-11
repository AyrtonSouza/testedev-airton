
INSERT INTO producao.tipologia ( id, nome, situacao, sigla ) VALUES ( 1, 'ALIMENTOS E BEBIDAS', 0, 'ALB' );
INSERT INTO producao.tecnica ( id, nome, situacao ) VALUES ( 1, 'AMARRADINHO', 0 );
INSERT INTO producao.tipologia_tecnica ( id, idtipologia, idtecnica, qtde_mes, unidade_medida ) VALUES ( 1, 1, 1, 30, 1 );

INSERT INTO producao.tipologia ( id, nome, situacao, sigla ) VALUES ( 2, 'TESTE TIPOLOGIA', 0, 'ALB' );
INSERT INTO producao.tecnica ( id, nome, situacao ) VALUES ( 2, 'TESTE TECNICA', 0 );
INSERT INTO producao.tipologia_tecnica ( id, idtipologia, idtecnica, qtde_mes, unidade_medida ) VALUES ( 2, 2, 2, 30, 1 );

INSERT INTO  producao.fator_tipologia ( id, id_tipologia, data_atualizacao ) VALUES ( 1, 1, '2019-04-16');