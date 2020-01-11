
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