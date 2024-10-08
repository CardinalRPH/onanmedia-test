PGDMP  #    :                |            onAMediaTest    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    onAMediaTest    DATABASE     �   CREATE DATABASE "onAMediaTest" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE "onAMediaTest";
                postgres    false            �            1259    16401    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    16752    pembaca    TABLE     �   CREATE TABLE public.pembaca (
    id integer NOT NULL,
    judul text NOT NULL,
    gambar text NOT NULL,
    deskripsi text NOT NULL,
    trending boolean NOT NULL,
    tag text[]
);
    DROP TABLE public.pembaca;
       public         heap    postgres    false            �            1259    16751    pembaca_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pembaca_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.pembaca_id_seq;
       public          postgres    false    221            �           0    0    pembaca_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.pembaca_id_seq OWNED BY public.pembaca.id;
          public          postgres    false    220            �            1259    16422 	   resources    TABLE     �   CREATE TABLE public.resources (
    id integer NOT NULL,
    name text NOT NULL,
    year integer NOT NULL,
    color text NOT NULL,
    pantone_value text NOT NULL
);
    DROP TABLE public.resources;
       public         heap    postgres    false            �            1259    16421    resources_id_seq    SEQUENCE     �   CREATE SEQUENCE public.resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.resources_id_seq;
       public          postgres    false    219            �           0    0    resources_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.resources_id_seq OWNED BY public.resources.id;
          public          postgres    false    218            �            1259    16413    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    avatar text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16412    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    217            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    216            ,           2604    16755 
   pembaca id    DEFAULT     h   ALTER TABLE ONLY public.pembaca ALTER COLUMN id SET DEFAULT nextval('public.pembaca_id_seq'::regclass);
 9   ALTER TABLE public.pembaca ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            +           2604    16425    resources id    DEFAULT     l   ALTER TABLE ONLY public.resources ALTER COLUMN id SET DEFAULT nextval('public.resources_id_seq'::regclass);
 ;   ALTER TABLE public.resources ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            *           2604    16416    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �          0    16401    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    215   b       �          0    16752    pembaca 
   TABLE DATA           N   COPY public.pembaca (id, judul, gambar, deskripsi, trending, tag) FROM stdin;
    public          postgres    false    221   j!       �          0    16422 	   resources 
   TABLE DATA           I   COPY public.resources (id, name, year, color, pantone_value) FROM stdin;
    public          postgres    false    219   �$       �          0    16413    users 
   TABLE DATA           I   COPY public.users (id, email, first_name, last_name, avatar) FROM stdin;
    public          postgres    false    217   �%       �           0    0    pembaca_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.pembaca_id_seq', 14, true);
          public          postgres    false    220            �           0    0    resources_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.resources_id_seq', 12, true);
          public          postgres    false    218            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 12, true);
          public          postgres    false    216            .           2606    16409 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    215            5           2606    16759    pembaca pembaca_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.pembaca
    ADD CONSTRAINT pembaca_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.pembaca DROP CONSTRAINT pembaca_pkey;
       public            postgres    false    221            3           2606    16429    resources resources_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.resources DROP CONSTRAINT resources_pkey;
       public            postgres    false    219            1           2606    16420    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    217            /           1259    16430    users_email_key    INDEX     I   CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);
 #   DROP INDEX public.users_email_key;
       public            postgres    false    217            �   �  x�u�Kn�!��3��>b�/��"'�4"/��MnlG�8q$v�����6�E�,X�YˊK��5Zc�
'��fs5VX��+WW�F>;b���5�A�l��V=��Bz|����{�{��J��z}���t���|>҉Us{��yL���e\����p��yq欱4O���U�is�~zϚ͹�
�֪�ޤ�Ծsь��b��B���g�;zy���߄���Gk]K"�"���i��1���H���Ό�
鰝]0�m��0c�YB0Ӝ�r�[�9�,,n)��C�b�o��C�K�#�x�O�X�Q�f+���s����]�N�o��SM�:|�3��d�=a�ΥS�
Zy�D�g6��-�F8.���x���ݿ��������]�MnN��������m��J��E,��.�8�'�ք�KLȫ�itj�6..��g3�k��N*vdQ�P��!z�_����A�,
~}j_�O߯����{�[=���p9�Ͽ �F�      �   ;  x�mU�{5=��ܸ,-�1MBZ(��'.Z��Z�V�a����Ό�	rۓ��f�{3�F~!޹׻��
'm���^_�YNxa�v�;?�[L�	8괅%�	��ld�_�AnT�>A�6�n���� b8`�6�Azo��I;�b�*W�K�G;<���767d�1�\�j�E=Oko'�e��-B/�V���T�Gc6�����gVe��2!�G�a��g��(k���ŊG���G�*�k����k�i��|�����?퀁�hh�{�\e��5�6f[������$�v��v�18�J�~�{��fs����:��{0�sa1Q/�4�[T��AT���`��#�/p���x�(�z��y>�~�b�� ��\[���\B����0e6ɣ�lSk����0vm#^��eL8����K�$�5N�N�N$�uo�kc"ӳ�,�'0l���?`�N��X�q����/|��ۡU1��R��ܫ���#��Rx�0���w�X�c�Nm����o?�幑-�<��O�)�u`4x�y�<WG�4�4NZP��� 1>k�͍�թ����ܟ�P��꜀ޅ�r	�-�>��:u5����'Z-[6�Z&	V���5�y��M��D iNQW;�Rm��4s
�J�+P2:��{��:�T�t:�M��6-���)�����Ӣ��C	e�-�Z$���+W��tta_ȉ{��_hp�����\ ▗��v��'_*zM�-=1Q�rI+�" YќJ��v�����,U�B�����+~ˤ�D�Y�{>�T�A.I��<e۴�=H��#���a����:��n��)�k��{�Z��=�t	      �     x�M��r� ��)4C���R��)�(2�c�FV᷷�������!�!o)L7�B��z�# �ZH�$�n�y�S��5�wF+C���B!S��[�r8�]�#:%]�M����M�zy�]7�ӝԵ�����BN1�>H�j(�԰~�.xn��-�A�Iy�%�$f`�n�괤4�4�������Q4��|�)V�p���1���G-�a�#�9����%�F@[+�C�x]֩��(:Am�FXm"��i��S�������r�u�/�`���N�F�����_��7�aV      �   ?  x�}�=o�0����_���TQA�
T���!����6D��:����{ѣ$�P��5�������EǄ���a�eh�?��<��B�yŏ���I(�ӹΆp�=k�_���˰�9��6T����P��`Z�gxE��)sEx)���2�cí�(c�p�z�����8!����,W�z�1î�ImJ�(�%��uFo�`IqF�9H�K�o�B[_�M?��}�T�D]�7��.��W��.'�ъn�hV	�%���.�:��P��[,[n��J��Aڤ[Q!hN�1-JI�]��"v=-���bY��0M�     