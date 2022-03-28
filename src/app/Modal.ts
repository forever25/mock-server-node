/*
 * @Author: ZWS
 * @Date: 2022-03-28 15:43:09
 * @LastEditTime: 2022-03-28 16:48:27
 * @Description: 模型基本类
 */
import fs from 'node:fs'

export default class Modal {
  public fileJson: string
  public path: string

  constructor(path: string) {
    this.path = path;
    this.fileJson = ''

    this.readFile(this.path)
  }
  public readFile(path: string) {
    fs.readFile(path, { flag: 'r+', encoding: 'utf8' }, (err, data) => {
      if (err) {
        fs.writeFile(path, '{}', { flag: 'a+', encoding: 'utf8' }, (err) => {
        })
      }
      this.fileJson = data;
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