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

To restart the data to init state use:

`docker volume rm docker_TC_mongo_data`

If you have some problems with removing old containers use:

`yes | docker-compose rm`

### Postman

#### Import files

- From menu bar choose: File -> import.. or `ctrl + o`
- import 2 files from directory /postman : 
	- camp-trello-clone.postman_collection.json
	- camp-trello-clone.postman_environment.json
 

#### set PORT in environment variables
- in sidebar click Environments 
- change Initial value to port on which your backend works (default: 8800)
- In `camp-trello-clone` envionment click on three dots(...) and set as active environment

#### New request
instead of using explicit port number use `{{PORT}}` variable, for example: `http://localhost:{{PORT}}/v1/`

#### Export collection
Click on three dots(...) in collection and Export file. Use recommending setting: Collection v2.1

More info:
[Managing environments](https://learning.postman.com/docs/sending-requests/managing-environments/)
[Importing and exporting data](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/)
