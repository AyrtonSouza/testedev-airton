--
-- PostgreSQL database dump
--

-- Dumped from database version 10.8
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: producao; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA producao;


ALTER SCHEMA producao OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cor; Type: TABLE; Schema: producao; Owner: postgres
--

CREATE TABLE producao.cor (
   id integer NOT NULL,
   nome character varying(50) NOT NULL,
   data_de_cadastro date NOT NULL default current_date,
   situacao bool NOT NULL default false
);


ALTER TABLE producao.cor OWNER TO postgres;

--
-- Name: cor_id_seq; Type: SEQUENCE; Schema: producao; Owner: postgres
--

CREATE SEQUENCE producao.cor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE producao.cor_id_seq OWNER TO postgres;

--
-- Name: cor_id_seq; Type: SEQUENCE OWNED BY; Schema: producao; Owner: postgres
--

ALTER SEQUENCE producao.cor_id_seq OWNED BY producao.cor.id;


--
-- Name: cor id; Type: DEFAULT; Schema: producao; Owner: postgres
--

ALTER TABLE ONLY producao.cor ALTER COLUMN id SET DEFAULT nextval('producao.cor_id_seq'::regclass);


--
-- Data for Name: cor; Type: TABLE DATA; Schema: producao; Owner: postgres
--

INSERT INTO producao.cor VALUES (1, 'Branco');
INSERT INTO producao.cor VALUES (2, 'Vermelho');
INSERT INTO producao.cor VALUES (4, 'Preto');
INSERT INTO producao.cor VALUES (3, 'Amarelo');


--
-- Name: cor_id_seq; Type: SEQUENCE SET; Schema: producao; Owner: postgres
--

SELECT pg_catalog.setval('producao.cor_id_seq', 4, true);


--
-- Name: cor cor_pkey; Type: CONSTRAINT; Schema: producao; Owner: postgres
--

ALTER TABLE ONLY producao.cor
    ADD CONSTRAINT cor_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

