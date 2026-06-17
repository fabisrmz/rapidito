import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: RegisterDto) {
    const exist = await this.userRepository.findOne({
      where: {email: createUserDto.email}});
      if (exist) {
      throw new ConflictException(`Este email ${createUserDto.email} ya existe.`);
    }
    const hashed = await bcrypt.hash(createUserDto.password, 10);
     
    const newUser = this.userRepository.create({...createUserDto, password: hashed});
    return this.userRepository.save(newUser);
  }


  async findByEmail(email: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();
  }

  async findById(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }
  

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    const user = await this.findOne(id);

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async remove(id: number) {

    const user = await this.findOne(id);

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    return this.userRepository.remove(user);
  }
}