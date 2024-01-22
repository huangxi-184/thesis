import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agency } from './manage/entities/agency.entity';
import { ManageModule } from './manage/manage.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "42.192.39.254",
      port: 3306,
      username: "panghujz",
      password: "HJ4aTCLZap5yWenY",
      database: "thesis",
      synchronize: false,
      logging: true,
      entities: [Agency],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      }
    }),
    ManageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
