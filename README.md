===================================
### GotACar_A used car trading plantform 

This is a React based MERN project, It is a small vehicle trading platform , simulates more than 30 UX scenarios. 
Back-end are mongo and node. Front-end covers react(,webpack,redux,saga,dva), jquery, jqueryUI,antd,css/less etc.
Let run and play it.

### Connect to database 

Create an empty database, for example "coolcars", then start it:

```bash
mongod --dbpath "C:\coolcars"

```

Basic data json file is in init/cardata.json. We need to import this json data to database:

```bash
mongoimport -d coolcars -c restaurants cars xxx/cardata.json --drop
```


### Build 

-Install node modules
```bash
npm install
```
-Build with webpack
```bash
npm install --save-dev webpack-cli 
npm install --save-dev webpack@4.42.0
webpack
```


### Run 

```bash

node app.js

```

