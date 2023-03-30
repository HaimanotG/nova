import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import helmet from '@fastify/helmet'
import { apiEnv } from './environments'

const { isProd, api } = apiEnv

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  await app.register(helmet, { contentSecurityPolicy: isProd })
  app.enableCors()
  app.listen(4001)

  Logger.log(`🚀 Application playground is running on: http://localhost:${api.port}/graphiql`)
}

bootstrap().catch(console.log)
