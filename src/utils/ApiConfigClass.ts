/*
 * @Author: ZWS
 * @Date: 2022-03-26 15:05:07
 * @LastEditTime: 2022-03-28 12:50:18
 * @Description: 系统api配置生成
*/

import type Router from 'koa-router'

type Methods = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'del'

export interface ApiConfig {
  readonly methods: Methods
  readonly path: string
  readonly handle: Router.IMiddleware
}

export class ApiConfigClass {
  private router: Router
  private config: ApiConfig[]
  private prefix: string
  constructor(router: Router, config: ApiConfig[], filePath: string = '') {
    this.prefix = this.disposePrefix(filePath)
    this.router = router
    this.config = config
  }
  // 处理文件前缀
  private disposePrefix(filePath: string): string {
    if (!filePath) {
      return ''
    }
    return filePath.replace(/(\.ts|\.)/g, '')
  }

  // 注册路由
  registerRouter() {
    this.config.forEach(it => {
      this.router[it.methods](`${this.prefix}/${it.path}`, it.handle)
    })
  }
}

export class ApiConfigList {
  apiConfigList: ApiConfig[]
  constructor(config?: ApiConfig[]) {
    this.apiConfigList = config ?? []
  }
  // 添加
  add(methods: Methods, path: string, handle: Router.IMiddleware) {
    this.apiConfigList.push({
      methods,
      path,
      handle
    })
  }
  // 获取ApiConfig
  getApiconfig() {
    return this.apiConfigList;
  }
}