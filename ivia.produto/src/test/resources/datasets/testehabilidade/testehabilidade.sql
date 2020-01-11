INSERT INTO corporativo.pais (id, nome, sigla) VALUES (1, 'Brasil', 'BR');
INSERT INTO corporativo.estado ( id, idpais, nome, sigla, tipo ) VALUES (1, 1, 'Ceara', 'CE', 0);
INSERT INTO corporativo.estado ( id, idpais, nome, sigla, tipo ) VALUES (2, 1, 'Maranhão', 'MA', 0);
INSERT INTO corporativo.municipio (id, idestado, nome, tipo ) VALUES ( 121, 1, 'Amontada', 0);
INSERT INTO corporativo.municipio (id, idestado, nome, tipo ) VALUES ( 1, 1, 'Amontada', 0);
INSERT INTO corporativo.municipio (id, idestado, nome, tipo ) VALUES ( 2, 2, 'Caxias', 0);

INSERT INTO   producao.criterios_habilidade ( id, descricao, peso, ativo, ordem_apresentacao ) VALUES ( 1, 'Conhecimento das matérias primas', 1, true, 1 );
INSERT INTO   producao.criterios_habilidade ( id, descricao, peso, ativo, ordem_apresentacao ) VALUES ( 2, 'Qualidade', 1, true, 2);
INSERT INTO   producao.criterios_habilidade ( id, descricao, peso, ativo, ordem_apresentacao ) VALUES ( 3, 'Habilidade', 1, true, 3 );

INSERT INTO producao.pessoa (id, nome, email, cpf, dt_nascimento, nu_identidade, endereco, endereco_nu, cep, situacao_id, senha) VALUES ( 1, 'IVIA', 'ivia@ivia.com', '430.460.023-00', '2019-01-02', '12121212', 'Rua 01', '1212', '65287000', 0, 'e10adc3949ba59abbe56e057f20f883e');

INSERT INTO 
  producao.atendimento
(
  id,data,cpf_cnpj,solicitante,instituicao,cargo,email_solicitante,telefone1,telefone2,descricao,situacao,cd_municipio,cd_tp_atendimento,cd_op_atendimento,
  ano_protocolo,numero_protocolo,usuario
)
VALUES (
  1,'2019-03-21','123.456.789-12','Lucas Lima','La alguma coisa','Gerente de Vendas','la_algumacoisa@gmail.com','99234-0219','99234-0219','Dados para serem testado',
  0,1,1,2,2019,'252','1'
);

INSERT INTO 
  producao.atendimento
(
  id,data,cpf_cnpj,solicitante,instituicao,cargo,email_solicitante,telefone1,telefone2,descricao,situacao,cd_municipio,cd_tp_atendimento,
  cd_op_atendimento,ano_protocolo,numero_protocolo,usuario
)
VALUES (
  2,'2019-03-21','599.553.640-09','Lucas Rua','La alguma coisa','Gerente de Projeto','projetos_9999@gmail.com','99234-0215','99334-0219','Dados para serem testado',
  0,1,1,2,2019,'325','1'
);

INSERT INTO 
  producao.atendimento
(
  id,data,cpf_cnpj,solicitante,instituicao,cargo,email_solicitante,telefone1,telefone2,descricao,situacao,cd_municipio,cd_tp_atendimento,
  cd_op_atendimento,ano_protocolo,numero_protocolo,usuario
)
VALUES (
  333,'2019-03-21','599.553.640-09','Lucas Rua','La alguma coisa','Gerente de Projeto','projetos_9999@gmail.com','99234-0215','99334-0219','Dados para serem testado',
  2,1,1,2,2019,'566','1'
);

INSERT INTO producao.tipologia (id,nome,situacao,sigla ) VALUES (1,'tipologia-teste',0,'tt' );
INSERT INTO producao.tipologia (id,nome,situacao,sigla ) VALUES (2,'tipologia-teste2',0,'tt' );

INSERT INTO producao.tecnica (id,nome,situacao ) VALUES (1,'Teste-Tecnica',0 );
INSERT INTO producao.tecnica (id,nome,situacao ) VALUES (2,'Teste-Tecnica2',0 );

INSERT INTO producao.tipologia_tecnica (idtipologia,idtecnica,indice,id,qtde_mes,unidade_medida ) VALUES (1,1,6,1,50,1 );
INSERT INTO producao.tipologia_tecnica (idtipologia,idtecnica,indice,id,qtde_mes,unidade_medida ) VALUES (2,2,6,2,50,1 );

INSERT INTO public.tipologia (id,nome,situacao,sigla ) VALUES (1,'tipologia-teste',0,'tt' );
INSERT INTO public.tipologia (id,nome,situacao,sigla ) VALUES (2,'tipologia-teste2',0,'tt' );

INSERT INTO public.tecnica (id,nome,situacao ) VALUES (1,'Teste-Tecnica',0 );
INSERT INTO public.tecnica (id,nome,situacao ) VALUES (2,'Teste-Tecnica2',0 );

INSERT INTO public.tipologiatecnica (idtipologia,idtecnica,indice ) VALUES (1,1,6 );
INSERT INTO public.tipologiatecnica (idtipologia,idtecnica,indice ) VALUES (2,2,6 );

INSERT INTO producao.grupo_tipologia (id,nome_grupo_tipologia,ativo ) VALUES (1,'teste...',true );

INSERT INTO producao.tipologia_grupo (id,id_tipologia,id_grupo_tipologia ) VALUES (1,1,1 );

INSERT INTO producao.precadastro (id,nome,id_atendimento,data_precadastro,cpf,id_municipio,respostas_consistentes,soube_resp_questoes,enc_teste_habilidade ) VALUES (1,'Luiz Lima',1,'2019-03-10','430.460.023-99',1,true,1, true );

INSERT INTO 
  producao.teste_habilidade
(
  id,atendimento_id,cpf,nome,data_teste,nome_produto,media_pontuacao,habilitado,tipologia_tecnica_id,
  tempo_gasto,data_realizacao_teste,situacao,usuario,tipologia_grupo_id
)
VALUES (
  1,2,'430.460.023-99','Luiz Lima','2019-03-15','produto-teste',
  8,true,1,4,'2019-03-10',true,17,1
);

INSERT INTO 
  producao.teste_habilidade
(
  id,atendimento_id,cpf,nome,data_teste,nome_produto,media_pontuacao,habilitado,
  tipologia_tecnica_id,tempo_gasto,data_realizacao_teste,situacao,usuario,tipologia_grupo_id
)
VALUES (
  2,2,'708.671.680-48','Luiz Lima','2019-03-15','produto-teste',8,false,1,4,'2019-03-10',false,
  17,1
);