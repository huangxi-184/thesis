import { ManageService } from './manage.service';
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AgencyDto } from './dto/agency.dto'


@Controller('manage')
export class ManageController {
  constructor(private readonly manageService: ManageService) { }

  @Get('/agencyList')
  async getAgencyList(@Body() agency: AgencyDto) {
    return await this.manageService.findAgencyAll()
  }

  @Post('/agencyListSkip')
  async getAgencyListSkip(@Body() agency: AgencyDto) {
    return await this.manageService.findAgencyList(agency)
  }

  @Post('saveAgency')
  async saveAgency(@Body() agency: AgencyDto) {
    return await this.manageService.insertAgency(agency)
  }

  @Get('deleteAgency')
  async deleteAgency(@Query() agency: AgencyDto) {
    return await this.manageService.deleteAgency(agency)
  }
}
