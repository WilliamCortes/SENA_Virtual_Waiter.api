import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  idClient: number;

  @Column()
  idDocumentType: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  documentNumber: string;

  @Column()
  phoneNumber: string;

  @Column()
  points: number;

  @Column()
  birthDate: Date;
}
