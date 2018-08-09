# GraphQL

## Getting start

React Apollo client
populate the page with data is going to make requests to express server, and the server hand over that request to GraphQL. Then go


前端掛一個 React Apollo client ,觸發 requests 後經由 Express 傳回到 GraphQL 再把資料傳給 database, query 完成後再傳回前端頁面.

#### Why not use RESTful api?
1. GraphQL is more effcient and more dynamic
2. RESTful api 意味著你的 app 要使用許多 url 來組成, 除了撰寫的時候容易造成多餘的負擔, 也會降低渲染的效率
3. 且 RESTful api 並沒有板控機制, 意味著每次更新的時候必須要考慮舊有的使用者, 只好留著舊版的 code

## Requirements
- nodejs `links`: https://nodejs.org/en/
    - express
```
npm init
npm install express --save
```
