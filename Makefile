COMPOSE     := docker-compose -f docker-compose.yml
COMPOSEDEV  := $(COMPOSE) -f docker-compose.dev.yml
COMPOSETEST := $(COMPOSE) -f docker-compose.test.yml
COMPOSEPROD := $(COMPOSE) -f docker-compose.prod.yml

prepare-host:
	@echo "Since ElasticSearch 5.0 you have to change 'vm.max_map_count' to at least 262144 on the host machine, even when using Docker."
	@echo "In order to do that I'm going to ask you for your sudo password"
	sudo sysctl -w vm.max_map_count=262144
	sudo bash -c 'echo "vm.max_map_count=262144" >> /etc/sysctl.conf'
	@echo "\033[1;32mSuccess!"
	@echo "Setting up client/ git-hook"
	@cd client && npm install
	@echo "\033[1;32mSuccess!"

create-network:
	-@docker network create nginx-proxy

generate-cert:
	@cd nginx && ./create-certs.sh



SERVICES := sc-flask sc-nginx sc-swagger sc-arangodb sc-frontend sc-elasticsearch sc-chrome-headless

run-dev:
	@$(COMPOSEDEV) up $(SERVICES)

run-dev-no-logs:
	@$(COMPOSEDEV) up -d $(SERVICES)

run-dev-rebuild:
	@$(COMPOSEDEV) up --build -d $(SERVICES)

run-prod:
	@$(COMPOSEPROD) up $(SERVICES)

run-prod-no-logs:
	@$(COMPOSEPROD) up -d $(SERVICES)

migrate:
	@docker exec -t sc-flask python server/manage.py migrate


clean-all:
	$(COMPOSE) down --rmi local --volumes


# reloads
# Only in dev mode local changes will be used after the reload
reload-nginx:
	@docker exec sc-nginx nginx -s reload
reload-uwsgi:
	@docker exec sc-flask uwsgi --reload /tmp/uwsgi.pid
install-requirements:
	@docker exec sc-flask pip install -r requirements.txt
	@make reload-uwsgi

# Tests.
# Starts containers so that we are ready to run tests in them.
prepare-tests:
	@make create-network
	-@docker-compose -f docker-compose.yml -f docker-compose.test.yml up -d
	@echo "waiting for all services to fully start"
	@bash wait_for_flask.sh
# Run tests
test:
	@make test-server

test-server:
	@docker exec -t sc-flask pytest server/

test-api:
	docker-compose run --entrypoint "python /opt/sc/api-tester/run-tests.py" sc-api-tester

load-data:
	@make migrate
	@docker exec -t sc-flask bash -c "cd server && python manage.py load_data"

load-data-no-pull:
	@make migrate
	@docker exec -t sc-flask bash -c "cd server && python manage.py load_data --no_pull"

delete-database:
	@docker exec -t sc-flask bash -c "cd server && python manage.py delete_db"

index-elasticsearch:
	@docker exec -t sc-flask bash -c "cd server && python manage.py index_elasticsearch"

hyphenate:
	@docker exec -t sc-flask bash -c "cd server && python manage.py hyphenate"



rebuild-frontend:
	docker-compose run sc-frontend npm run build

bundle-analyzer:
	docker-compose run sc-frontend npm run build --report

rebuild-static-pages:
	cd client && npm run extract-static-strings

run-preview-env:
	@make clean-all
	@make create-network
	@make generate-cert
	@make run-dev-no-logs
	@bash wait_for_flask.sh
	@make load-data
	@make index-elasticsearch
	@make hyphenate
	@echo "\033[1;32mDONE!"

run-preview-env-no-search:
	@make clean-all
	@make create-network
	@make generate-cert
	@make run-dev-no-logs
	@bash wait_for_flask.sh
	@make load-data
	@make hyphenate
	@echo "\033[1;32mDONE!"

run-production-env:
	@make generate-env-variables
	@make rebuild-all
	@make run-prod-no-logs
	@bash wait_for_flask.sh
	@make load-data
	@make index-elasticsearch
	@make hyphenate
	@echo "\033[1;32mDONE!"
	@make run-prod

generate-env-variables:
	@docker run -it --rm --name env_variable_setup -v $(shell pwd):/opt/ -w /opt python:3.7 python env_variables_setup.py

toggle-maintenance:
	@docker exec -it sc-nginx bash -c "cd /opt/sc/static; if rm maintenance_on.html 2>/dev/null; then echo 'Maintenance Off'; else ln -s maintenance_off.html -T ./maintenance_on.html && echo 'Maintenance On'; fi"
