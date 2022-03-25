/*
 * @Author: ZWS
 * @Date: 2022-03-12 14:36:19
 * @LastEditTime: 2022-03-25 17:42:45
 * @Description: 文件描述
 */

import Koa from 'koa'
const configApp = require('@/config/config.json')
import router from '@/routes/index'

const app = new Koa();


app.use(router.routes())
app.use(router.allowedMethods());
app.listen(configApp.server.port);
console.log(`http://127.0.0.1:${configApp.server.port}`)