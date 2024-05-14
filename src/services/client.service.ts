import { Injectable } from '@nestjs/common';
import { Client } from 'src/models/client.entity';

@Injectable()
export class ClientService {
  private readonly clients: Client[] = []; // Esto podría ser una base de datos real o un almacenamiento en memoria.

  create(client: Client): Client {
    this.clients.push(client);
    return client;
  }

  findAll(): Client[] {
    return this.clients;
  }

  findById(id: number): Client {
    return this.clients.find((client) => client.idClient === id);
  }
}
