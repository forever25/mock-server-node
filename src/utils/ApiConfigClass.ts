/*
 * @Author: ZWS
 * @Date: 2022-03-26 15:05:07
 * @LastEditTime: 2022-03-26 17:35:23
 * @Description: api配置生成
*/

import type Router from 'koa-router'

interface ApiConfig {

}

class ApiConfigClass {
  private router: Router
  private config: ApiConfig
  constructor(router: Router, config: ApiConfig) {
    this.router = router
    this.config = config
  }

}