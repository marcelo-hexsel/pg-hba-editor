config:
	@mkdir -p ./local_pgdata

up: config
	@docker-compose up -d --force-recreate pg 

down:
	@docker-compose down

run: 
	@yarn start:dev

debug: 
	@yarn start:debug