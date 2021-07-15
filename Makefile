.PHONY: test run build config

install:
	@yarn

test:
	@yarn test


functional-test: up
	@yarn test:e2e
	@$(MAKE) down
	
build:
	@yarn build

config:
	@mkdir -p ./local_pgdata

up: config
	@docker-compose up -d -V --force-recreate pg 

down: clean-postgres-data
	@docker-compose down
	@$(MAKE) clean-postgres-data

clean-postgres-data:
	@rm -rf ./local_pgdata/*

run: up
	@yarn start:dev

debug: 
	@yarn start:debug