config:
	@mkdir -p ./local_pgdata

up: config
	@docker-compose up -d -V --force-recreate pg 

down: clean-postgres-data
	@docker-compose down
	@$(MAKE) clean-postgres-data

clean-postgres-data:
	@rm -rf ./local_pgdata/*

run: 
	@yarn start:dev

debug: 
	@yarn start:debug