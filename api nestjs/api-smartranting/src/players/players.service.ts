/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/Create-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {PlayersEntity} from './player.entity';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { updatedPlayerdto } from './dtos/update-player.dto';

@Injectable()
export class PlayersService {

    constructor(
        @InjectRepository(PlayersEntity)
        private readonly playersRepository: Repository<PlayersEntity>,
    ){ }

    async CreatePlayer(data: CreatePlayerDto){
         const player = this.playersRepository.create(data);
         return await this.playersRepository.save(player);
    }

    async Update(id: string, data: updatedPlayerdto){
        const player = await this.playersRepository.findOneOrFail({id});
        this.playersRepository.merge(player, data);
        return await this.playersRepository.save(player);
    }

    async FindPlayersOrFail(
        conditions: FindConditions<PlayersEntity>,
        options?: FindOneOptions<PlayersEntity>
    ){
        try{
            return await this.playersRepository.findOneOrFail(conditions, options);
        }catch(error){
            throw new NotFoundException(error.message);
        }
    }

    async FindAllPlayers(){
        return await this.playersRepository.find();
    }

    async DeletePlayer(id: string){
        await this.playersRepository.findOneOrFail({id});
        this.playersRepository.softDelete({id});
    }

   
}





