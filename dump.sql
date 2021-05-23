--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
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
-- Name: color; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.color AS ENUM (
    'white',
    'black'
);


ALTER TYPE public.color OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: game-requests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."game-requests" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    color public.color,
    create_time timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."game-requests" OWNER TO postgres;

--
-- Name: game-requests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."game-requests_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."game-requests_id_seq" OWNER TO postgres;

--
-- Name: game-requests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."game-requests_id_seq" OWNED BY public."game-requests".id;


--
-- Name: games; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.games (
    id integer NOT NULL,
    creator_id integer NOT NULL,
    create_time timestamp with time zone DEFAULT now() NOT NULL,
    player_w_id integer NOT NULL,
    player_b_id integer NOT NULL
);


ALTER TABLE public.games OWNER TO postgres;

--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.games_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_id_seq OWNER TO postgres;

--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: moves; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.moves (
    id integer NOT NULL,
    game_id integer NOT NULL,
    player_id integer NOT NULL,
    fen_from character varying(255),
    fen_to character varying(255),
    create_time timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.moves OWNER TO postgres;

--
-- Name: moves_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.moves_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moves_id_seq OWNER TO postgres;

--
-- Name: moves_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.moves_id_seq OWNED BY public.moves.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    login character varying(255),
    created timestamp with time zone DEFAULT now() NOT NULL,
    hash character varying NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: game-requests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."game-requests" ALTER COLUMN id SET DEFAULT nextval('public."game-requests_id_seq"'::regclass);


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Name: moves id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moves ALTER COLUMN id SET DEFAULT nextval('public.moves_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: game-requests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."game-requests" (id, user_id, color, create_time) FROM stdin;
7	4	white	2021-05-23 08:19:48.033919+00
8	4	white	2021-05-23 08:19:48.033919+00
9	4	\N	2021-05-23 08:19:48.033919+00
10	4	\N	2021-05-23 08:19:48.033919+00
11	3	\N	2021-05-23 08:19:48.033919+00
12	3	\N	2021-05-23 08:19:48.033919+00
13	3	black	2021-05-23 08:19:48.033919+00
14	3	black	2021-05-23 08:19:48.033919+00
15	3	white	2021-05-23 08:19:48.033919+00
16	3	\N	2021-05-23 08:19:48.033919+00
17	3	black	2021-05-23 08:22:33.703141+00
18	3	\N	2021-05-23 08:24:17.998528+00
19	3	\N	2021-05-23 08:25:10.990025+00
20	3	\N	2021-05-23 08:25:45.234532+00
21	3	black	2021-05-23 08:26:17.067581+00
22	3	black	2021-05-23 08:29:20.792016+00
23	3	black	2021-05-23 08:29:36.005222+00
24	3	black	2021-05-23 08:31:24.475515+00
25	3	black	2021-05-23 08:31:38.908999+00
26	3	black	2021-05-23 08:32:38.429427+00
27	4	\N	2021-05-23 08:36:16.759182+00
28	4	\N	2021-05-23 08:37:46.905547+00
29	4	\N	2021-05-23 08:42:50.479519+00
30	4	\N	2021-05-23 08:43:28.193171+00
31	4	\N	2021-05-23 08:43:41.004778+00
32	4	\N	2021-05-23 08:43:54.975251+00
33	4	\N	2021-05-23 08:51:16.871235+00
\.


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.games (id, creator_id, create_time, player_w_id, player_b_id) FROM stdin;
1	1	2019-08-04 10:28:38.60012+00	1	2
2	2	2021-04-24 07:42:10.897746+00	2	3
\.


--
-- Data for Name: moves; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.moves (id, game_id, player_id, fen_from, fen_to, create_time) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, login, created, hash) FROM stdin;
1	Alex	2019-08-04 10:14:05.670553+00	random
2	Lilu	2019-08-04 10:14:05.670553+00	random
3	Test	2021-04-10 11:16:18.809012+00	$2b$10$8JtyCNaGjEwkngy8LJje9urXhSm49JjZsC.xIP288ZCcGgzvODnIG
4	Lex	2021-04-24 07:34:46.867757+00	$2b$10$P.FoxHT5nm5jH/BUVfmLKOLUA/uBQy.iBfLPRBWZ3gSttNzWzafQK
\.


--
-- Name: game-requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."game-requests_id_seq"', 33, true);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.games_id_seq', 2, true);


--
-- Name: moves_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.moves_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: game-requests game-requests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."game-requests"
    ADD CONSTRAINT "game-requests_pkey" PRIMARY KEY (id);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: moves moves_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moves
    ADD CONSTRAINT moves_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: games fk_game_creator; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_game_creator FOREIGN KEY (creator_id) REFERENCES public.users(id);


--
-- Name: moves fk_game_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moves
    ADD CONSTRAINT fk_game_id FOREIGN KEY (game_id) REFERENCES public.games(id);


--
-- Name: games fk_game_player_b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_game_player_b FOREIGN KEY (player_b_id) REFERENCES public.users(id);


--
-- Name: games fk_game_player_w; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT fk_game_player_w FOREIGN KEY (player_w_id) REFERENCES public.users(id);


--
-- Name: moves fk_player_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.moves
    ADD CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES public.users(id);


--
-- Name: game-requests game-requests_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."game-requests"
    ADD CONSTRAINT "game-requests_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

