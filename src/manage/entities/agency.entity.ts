import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'agency'
})
export class Agency {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
    })
    name: string;

    @Column({
        name: 'sortId',
    })
    sortId: number;

    // 0: 正常 1: 禁用
    @Column({
        name: 'status',
    })
    status: number;
}
