import { Controller, Get } from '@nestjs/common';
import { Client } from 'src/models/client.entity';
import { ClientService } from 'src/services/client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }
}
