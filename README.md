# Race Conditions With useEffect

I queckly wanted to demonstrate why running your fetches with no helper librarys can be tricky

the server has 1 endpoing "/api/people" then it looks for the id of the perosn at the end of the path.

Person 1 has an artifical long load using a timeout to simulate possible latency in an application

to run the app open two terminals one in the root of the project and one in the frontend dir

run in root

```
npm start
```

run in frontend

```
npm run dev
```

then go to `localhost:5173` there you will see 3 buttons click John Doe then right after click Jane Doe. You'll see that Jane Doe loads right away then about 5 seconds later John Doe will load. this is called a race condition. even though the state says its showing Jane Doe since John resolved after that's what will be displayed
