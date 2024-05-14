import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  idProduct: number;

  @Column({ type: 'varchar', length: 45 })
  name: string;

  @Column({ type: 'int', zerofill: true })
  cost: number;

  @Column({ type: 'int', zerofill: true })
  price: number;

  @Column({ type: 'int', zerofill: true })
  amount: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'date' })
  expirationDate: Date;

  @Column({ type: 'varchar', length: 100 })
  image: string;
}
