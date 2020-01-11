INSERT INTO producao.pessoa (id, nome, email, cpf, dt_nascimento, nu_identidade, endereco, endereco_nu, cep, situacao_id, senha) VALUES ( 1, 'IVIA', 'ivia@ivia.com', '430.460.023-00', '2019-01-02', '12121212', 'Rua 01', '1212', '65287000', 0, 'e10adc3949ba59abbe56e057f20f883e');

INSERT INTO 
  producao.motivo_situacao
(
  id,
  id_recurso,
  situacao,
  descricao,
  ativo
)
VALUES (
  1,
  12,
  1,
  'TESTE',
  true
);

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
  producao.artesao
(
  id,
  cpf,
  data_cadastro,
  nome,
  situacao,
  id_municipio,
  id_atendimento,
  via_carteira,
  cep,
  endereco_complemento,
  data_expedicao_rg,
  data_nascimento,
  email,
  endereco,
  endereco_numero,
  imigrante_br,
  nome_mae,
  nome_pai,
  numero_identidade,
  orgao_expedidor,
  posicao_familiar,
  posicao_familiar_especifica,
  rede_social,
  telefone_celular,
  telefone_fixo,
  uf,
  zona_urbana,
  naturalidade_id,
  nacionalidade_id,
  estado_identidade_id,
  bairro_id,
  distrito_id,
  estado_id,
  local_vive,
  situacao_especial,
  etnia,
  registro_funai,
  contribui_previdencia,
  cor_raca,
  dependentes_economicos,
  escolaridade,
  estado_civil,
  moradia,
  possui_deficiencia,
  renda_familiar,
  renda_individual,
  sexo,
  maior_fonte_renda,
  artesao_desde,
  instrutor_tecnica,
  motivo_ingresso_artesanal,
  status_atividade,
  vinculo_grupo,
  qnt_horas_producao,
  local_producao,
  sistema_trabalho,
  destino_producao,
  forma_pagamento,
  maior_cliente,
  tipo_venda,
  numero_carteira,
  data_validade_carteira
)
VALUES (
  56898,
  '708.671.680-48',
  '2019-03-20',
  'Lima Oliveira',
  0,
  2,
  1,
  1,
  '62870-000',
  'Rua 0125',
  '2011-01-20',
  '1950-02-15',
  'teste_@gmail.com',
  'Rua 201 Teste',
  '256',
  false,
  'Silva Rita de Souza',
  'Juca de Oliveira Lima',
  '123123456',
  'ssp',
  1,
  'Lider',
  'juca_',
  '99245-5263',
  '3482565',
  'MA',
  false,
  1,--?naturalidade_id,
  1,--?nacionalidade_id,
  1,--?estado_identidade_id,
  2,--?bairro_id,
  2,--?distrito_id,
  2,--?estado_id,
  1,
  0,
  'Outro',
  'teste teste teste',
  false,--?contribui_previdencia,
  2,--?cor_raca,
  false,--?dependentes_economicos,
  4,--?escolaridade,
  0,--?estado_civil,
  2,--?moradia,
  false,--?possui_deficiencia,
  2,--?renda_familiar,
  3,--?renda_individual,
  0,--?sexo,
  1,--?maior_fonte_renda,
  0,--?artesao_desde,
  true,--?instrutor_tecnica,
  0,--?motivo_ingresso_artesanal,
  0,--?status_atividade,
  false, --?vinculo_grupo,
  2,--?qnt_horas_producao,
  1,--?local_producao,
  1,--?sistema_trabalho,
  0,--?destino_producao,
  0,--?forma_pagamento,
  0,--?maior_cliente,
  3,--?tipo_venda,
   258565, --?numero_carteira,
  '2021-04-04'--?data_validade_carteira,
);

INSERT INTO producao.solicitacao_reajuste ( id, data_solicitacao, id_usuario, situacao_solicitacao, id_entidade, id_artesao, tipo) VALUES ( 1, '2019-04-15', 1, 1, null, 56898, 0 );

INSERT INTO producao.motivo_solicitacao(  id,  motivo_solicitacao,  ativo)VALUES (  1,  'TESTE',  true);

INSERT INTO 
  producao.historico_situacao_solicitacao
(
  id,
  id_solicitacao,
  id_motivo_situacao,
  data_atualizacao,
  id_usuario,
  observacao
)
VALUES (
  1,
  1,
  1,
  '2019-04-10',
  1,
  'obs'
);