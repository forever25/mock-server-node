/*
 * @Author: ZWS
 * @Date: 2022-03-12 14:36:19
 * @LastEditTime: 2022-03-14 11:17:01
 * @Description: 文件描述
 */

import Koa from 'koa'
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
console.log('https://127.0.0.1:3000')