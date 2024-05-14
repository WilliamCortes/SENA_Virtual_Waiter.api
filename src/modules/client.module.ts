import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from 'src/controllers/client.controller';
import { Client } from 'src/models/client.entity';
import { ClientService } from 'src/services/client.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
