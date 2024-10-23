import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'; 

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //MongooseModule.forRoot('process.env.MONGO_URI'),
    //MongooseModule.forRoot('mongodb://localhost:27017/mean-db'),
    MongooseModule.forRoot('mongodb://mongo:iIatjPxVrFdbiPauIEziyCHQQYfktorp@autorack.proxy.rlwy.net:33358', {
      dbName: process.env.MONGO_DB_NAME,
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
