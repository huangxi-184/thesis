import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agency } from './entities/agency.entity';
import { AgencyDto } from './dto/agency.dto'

@Injectable()
export class ManageService {
    @InjectRepository(Agency)
    private agencyRepository: Repository<Agency>;

    // 不分页
    async findAgencyAll() {
        const records = await this.agencyRepository.find({
            order: {
                sortId: 'ASC'
            },
            where: {
                status: 0
            }
        });
        return records;
    }

    // 分页列表
    async findAgencyList({ pageNum, pageSize }) {
        const skipCount = (pageNum - 1) * pageSize;

        const [records, total] = await this.agencyRepository.findAndCount({
            order: {
                sortId: 'ASC'
            },
            skip: skipCount,
            take: pageSize
        });
        return { records, total };
    }

    // 新增或保存
    async insertAgency(agency: AgencyDto) {
        const agencyEntity = new Agency()
        if (agency.id) {
            agencyEntity.id = agency.id;
        }
        agencyEntity.name = agency.name
        agencyEntity.sortId = agency.sortId;
        await this.agencyRepository.save(agencyEntity)
    }

    // 删除
    async deleteAgency({ id }) {
        await this.agencyRepository.update(id, { status: 1 })
    }
}
