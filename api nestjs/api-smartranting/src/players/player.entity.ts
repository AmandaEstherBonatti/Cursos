/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'players'})
export class PlayersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'player_name'})
    name: string;

  @Column({name: 'email'})
    email: string;

  @Column({name: 'phone_number'})
    phoneNumber: string;

  @Column({name: 'ranking'})
    ranking: string;

  @Column({name: 'ranking_position', type:'int'})
    rankingPosition: number;
}

