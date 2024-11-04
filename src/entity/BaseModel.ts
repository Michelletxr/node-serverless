import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BaseModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
