# Coders camp project - module 2

## Trello clone

### Setup

Install all packages by using `yarn`.

inside frontend package create `.env` file with following variable `SKIP_PREFLIGHT_CHECK=true`.

Start development with `yarn start`.

### Figma

[project](https://www.figma.com/file/UOqXCGxVb1fjY7pWUzvI8K/Thullo---Trello-Clone?node-id=0%3A1)

### Mantine

[documentation](https://mantine.dev/)

### Conventional commits

[documentation](https://www.npmjs.com/package/@commitlint/config-conventional)

- feat - new functionality
- fix - amendment to existing functionality
- docs - changes only in documentation
- chore - changes that do not affect the source code or test content (e.g. package updates)
- refactor - changes that are not both fixes and new functionalities
- tests - everything connected with tests (adding, editing)
- perf - changes in code that improve performance,
- styles - all kinds of code formatting, white space, commas or missing - semicolons
- ci - changes for CI purposes (configs, scripts),
- build - changes affecting the build process,
- revert - revert the last changes

### Docker

To run MongoDB on docker container go to `./docker` path and use: 

`docker-compose up -d` 

to stop docker container use:

`docker-compose down` 

If you have some problems with restarting DB remove the old containers with:

`yes | docker-compose rm`