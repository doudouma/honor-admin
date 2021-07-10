import { Request, Response } from 'express'
import { Player, Hero } from '../src/api/types'
import { heros } from './heros'
import faker from 'faker'

faker.locale = 'zh_CN'
const playCount = 100
const palyList: Player[] = []

for (let index = 0; index < playCount; index++) {
  palyList.push({
    id: index,
    accountname: faker.name.findName(),
    avatar: faker.image.avatar(),
    bravepoints: faker.datatype.number(1000),
    rank: faker.datatype.number(200),
    exp: faker.datatype.number(100000),
    nickname: faker.name.findName(),
    wanttoplay: genWantPlay(),
    winningstreak: faker.datatype.number(10),
    level: faker.datatype.number(30)
  })
}

function genWantPlay() {
  const wanttopaly: Set<Hero> = new Set()
  while (wanttopaly.size < 3) {
    wanttopaly.add(heros[faker.datatype.number(9)])
  }
  return Array.from(wanttopaly)
}

// router
export const getPlayers = (req: Request, res: Response) => {
  console.log(req)

  const { accountname, page = 1, limit = 10 } = req.query
  //  过滤
  const mocklist = palyList.filter(item => {
    if (accountname && item.accountname.indexOf(accountname as string) < 0) {
      return false
    }
    return true
  })

  // 分页
  const pagelist = mocklist.filter(
    (item, index) => index < (<number>limit) * <number>page && index >= (<number>limit) * (<number>page - 1)
  )

  res.json({
    code: 20000,
    data: {
      total: mocklist.length,
      players: pagelist
    }
  })
}
