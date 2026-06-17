import { Food } from 'src/foods/entities/food.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export class Category extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column({ default: true })
  active!: boolean;

  @OneToMany(() => Food, (food) => food.category)
  foods!: Food[];
}