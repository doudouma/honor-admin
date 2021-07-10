export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: string | number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface ITransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}

export interface IUserData {
  id: number
  username: string
  password: string
  name: string
  email: string
  phone: string
  avatar: string
  introduction: string
  roles: string[]
}

// 英雄数据
export interface Hero{
  id:number
  name:string
  icon:string
  classify:string[]
}

// 玩家信息
export interface Player {
  id:number
  accountname:string
  nickname:string
  avatar:string
  level:number
  exp:number
  rank:number
  bravepoints:number
  winningstreak:number
  wanttoplay:Hero[]
}
