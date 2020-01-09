# node-rest-api-script
> A Node.js CLI tool that makes a REST API request to get an external collection of employees, filters the
> results, and deletes a given user by name.

> This script was created to better understand garbage collection, command line styling, and make requests 
> to an external API based on the arguments passed to the command by users. 

<p align="center">
  <img src="https://github.com/iTrauco/node-rest-api-script/blob/master/public/2020-01-09%2017.21.48.gif">
</p>

[Dummy API](https://itrau.co/DummyAPI)

## requirements
- [NodeJS](https://nodejs.org/en/)

- Tested on macOS and Linux(Ubuntu/CentOS)

- Git 

- npm(Bundled w/ Node)

### usage

```bash
$ poc [username]
```
For example: to delete a user named "John Doe"
```bash
$ poc "John Doe"
```

## installation
Clone this repo
```
git clone https://github.com/iTrauco/node-rest-api-script
```

`cd` into project directory
```
cd poc
```

Install dependencies
```
npm install
```
Build project package
```
npm run build
```

```
npm run start
```

garbage collection
```
npm run clean
```

### Example

<p align="center">
  <img src="https://github.com/iTrauco/node-rest-api-script/blob/master/public/2020-01-09%2017.14.46.gif">
</p>
