/*
 * @Author: ZWS
 * @Date: 2022-03-28 15:43:09
 * @LastEditTime: 2022-04-06 18:01:35
 * @Description: 模型基本类
 */
import fs from 'node:fs'

export default class Modal {
  public tableData:any
  public path: string

  constructor(path: string) {
    this.path = path;
    this.tableData;
    this.readFile(this.path)
  }
  public readFile(path: string) {
    fs.readFile(path, { flag: 'r+', encoding: 'utf8' }, (err, data) => {
      if (err) {
        fs.writeFile(path, '[]', { flag: 'a+', encoding: 'utf8' }, (err) => {
        })
      }
      this.tableData = JSON.parse(data) ;
    })
  }
  public isExists() {

  }
  public add() {
    
  }
  public del() {

  }
  public get() {

  }
  public getAll() {

  }
  public where() {

  }
  
}