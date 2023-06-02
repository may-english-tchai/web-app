GIT_CURRENT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

.DEFAULT_GOAL := dev

## —— React Makefile ———————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?## .*$$)|(^## )' Makefile | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Npm server ———————————————————————————————————
install:
	@test -f .env.local || cp .env .env.local
	npm install

dev: install
	npm run dev

## —— Linters ———————————————————————————————————
lint:
	npm run lint
	npx rome format . --write
	npx rome check . --apply-unsafe

rome-check:
	npx rome check .

## —— Git ———————————————————————————————————

type ?= feat
commit: lint
	git add .
	@git commit -m "${type}: #$(shell git branch --show-current | sed 's/-/ /g')"
	git rebase origin/main
	git push origin "$(GIT_CURRENT_BRANCH)"
