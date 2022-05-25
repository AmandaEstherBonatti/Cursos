/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */

import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { PlayersEntity } from './player.entity';

@Injectable()
export class ValidationPipe implements PipeTransform<PlayersEntity> {
  async transform(value: PlayersEntity, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if(errors.length > 0){
        throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean{
      const types: Function[] = [String, Boolean, Number, Object];
      return !types.includes(metatype);
  }
}
