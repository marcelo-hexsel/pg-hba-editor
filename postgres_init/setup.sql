--creates pg-hba-editor application schema
create schema if not exists hba_editor authorization postgres;

--creates pg_hba.conf mirror rules table
create table if not exists hba_editor.hba_editor_rules
(
	line_number bigint not null primary key,
	type text not null,
	database text[] not null,
	user_name text[] not null,
	address text,
	netmask text,
	auth_method text not null,
	options text[]
);