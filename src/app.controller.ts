import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Agency } from './entities/agency.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @InjectRepository(Agency)
  private agencyRepository: Repository<Agency>;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('agencyList')
  async getAgencyList(agency: Agency) {
    return await this.agencyRepository.find({
      select: {
        name: true,
        sortId: true,
      },
    });
  }
}
