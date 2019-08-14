TOOLS := $(shell npm bin)

SRC_PATH    = 'src/**/*.tsx'
ENTRY_POINT = 'src/index.tsx'

.PHONY: help
help:
	@echo "Usage:"
	@echo "    help:         Prints this screen"
	@echo "    install-deps: Installs dependencies"
	@echo "    format:       Formats the code"
	@echo "    fmt:          An alias for format"
	@echo "    type-check:   Type checks the code"
	@echo "    lint:         Lints the code"
	@echo "    fix-lint:     Automatically apply certain lint fixes"
	@echo "    test:         Run the tests"
	@echo "    run:          Run the react frontend in a dev mode"
	@echo "    build:        Build the react frontend for deployment"
	@echo "    prod-build:   Build the docker image for the prod mode"
	@echo "    prod-run:     Run the prod mode"
	@echo "    clean:        Clean out temporaries"
	@echo ""

.PHONY: install-deps
install-deps:
	npm install

.PHONY: format
format:
	@echo "Auto Formatting"
	@$(TOOLS)/prettier --write $(SRC_PATH)

.PHONY: fmt
fmt: format

.PHONY: type-check
type-check:
	@echo "Type Checking"
	@$(TOOLS)/tsc --noEmit || true

.PHONY: lint
lint: type-check
	@echo "Linting"
	@$(TOOLS)/eslint $(SRC_PATH)

.PHONY: fix-lint
fix-lint:
	@echo "Auto fixing linting"
	@$(TOOLS)/eslint --fix $(SRC_PATH)

.PHONY: test
test:
	@echo "Run the tests"
	@$(TOOLS)/jest --passWithNoTests

.PHONY: run
run:
	@echo "Run the code for development"
	@$(TOOLS)/parcel watch $(ENTRY_POINT)

.PHONY: build
build: lint
	@echo "Packaing the code for release"
	@$(TOOLS)/parcel build $(ENTRY_POINT)

.PHONY: prod-build
prod-build:
	docker build . -f deployment/Dockerfile -t coa-front-end

.PHONY: prod-run
prod-run: prod-build
	docker run --rm -p 3000:80 coa-front-end

.PHONY: clean
clean:
	rm -rf node_modules/ build/ dist/ .cache/
