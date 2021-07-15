# pg-hba-editor

[![Node.js CI](https://github.com/marcelo-hexsel/pg-hba-editor/actions/workflows/main.yml/badge.svg)](https://github.com/marcelo-hexsel/pg-hba-editor/actions/workflows/main.yml)

## How to build

We strongly recommend that you use NVM (Node Version Manager - https://github.com/nvm-sh/nvm) to setup your node.  
This project uses Node JS 14.x, so you can setup your environment using

```
nvm install 14
```

## How to run unit tests

```
make test
```

## How to run locally

You will need `docker` and `docker-compose` to run locally.

To run the application locally, just run

```
make run
```

This will bring a dockerized infrastructure up (wich the application depends on, for instance: postgres) and will run the API

If want to shutdown all dockerized infrastructure

```
make down
```

There are many other make targets, see ```Makefile``` for all options.
