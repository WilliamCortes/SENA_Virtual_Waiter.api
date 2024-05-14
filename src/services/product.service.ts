import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/products.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository
      .createQueryBuilder('product')
      .where('product.idProduct = :id', { id })
      .getOne();
  }

  async create(productData: Partial<Product>): Promise<Product> {
    const newProduct = this.productRepository.create(productData);
    return this.productRepository.save(newProduct);
  }

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, productData);
    return this.productRepository
      .createQueryBuilder('product')
      .where('product.idProduct = :id', { id })
      .getOne();
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
