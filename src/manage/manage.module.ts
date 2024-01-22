import { Module } from '@nestjs/common';
import { ManageService } from './manage.service';
import { ManageController } from './manage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agency } from './entities/agency.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Agency]),
  ],
  controllers: [ManageController],
  providers: [ManageService]
})
export class ManageModule { }
