
/*
 * @Author: ZWS
 * @Date: 2022-03-25 16:42:18
 * @LastEditTime: 2022-03-28 12:32:09
 * @Description: koa router 入口
 */
import Router from 'koa-router';
import { ApiConfigClass } from '@/utils/ApiConfigClass';

// 根据文件名为前缀添加路由
const router: Router = new Router();
const modalMap = require.context('../routes', true, /\.ts$/)
modalMap.keys().forEach(it => {
  if (it == './index.ts') { return }

  new ApiConfigClass(router, modalMap(it).default, it).registerRouter()
})


export default router