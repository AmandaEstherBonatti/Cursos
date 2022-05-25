/* eslint-disable prettier/prettier */
import {  Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, ValidationPipe} from '@nestjs/common';
import { CreatePlayerDto } from './dtos/Create-player.dto';
import { updatedPlayerdto } from './dtos/update-player.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {

    constructor(private readonly playersService: PlayersService) {}

    @Post()
    async CreatePlayer(
        @Body(new ValidationPipe()) body: CreatePlayerDto){
             await this.playersService.CreatePlayer(body)
    }

    @Put(':id')
    async updatePlayer(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() body: updatedPlayerdto){
        return await this.playersService.Update(id, body);
    }

    @Get()
    async consultPlayers(){
        return await this.playersService.FindAllPlayers();
    }

    @Get(':id')
    async consultPlayerForId(@Param('id', new ParseUUIDPipe()) id: string){
        return await this.playersService.FindPlayersOrFail({id});
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
        await this.playersService.DeletePlayer(id);
  }
}
