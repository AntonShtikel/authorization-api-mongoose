
## Installation

```Url
http://localhost:3003/

# to registrate users send reuests on http://localhost:3003/authorization/registration 
#
# to login users send reuests on http://localhost:3003/authorization/login 
```

## Running the app

```bash
# crete and run containers in docker
$ docker-compose up --build 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



## Support
<p> Data stores in data-for-redis.txt It is file with 50 names</p>>
<p> 10 random names get from this file after using requests on this url http://localhost:3003/authorization/login </p>
<p> to connect to mongo db you should change to your url in file app.module.ts </p>
