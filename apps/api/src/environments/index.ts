import * as process from 'node:process'

export const apiEnv: IApiEnv = {
  isProd: process.env.NODE_EVN === 'production',
  api: {
    port: Number(process.env.API_ROOT)
  },
  db: {
    url: process.env.DATABASE_URL
  }
}

export interface IApiEnv {
  isProd: boolean
  api: {
    port: number
  }
  db: {
    url: string
  }
}
