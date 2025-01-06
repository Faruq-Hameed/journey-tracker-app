import { Column } from 'typeorm';
import { IsNumber } from 'class-validator';

export class Coords {
  @Column('float')
  @IsNumber()
  latitude: number;

  @Column('float')
  @IsNumber()
  longitude: number;

  @Column('float')
  @IsNumber()
  altitude: number;

  @Column('float')
  @IsNumber()
  accuracy: number;

  @Column('float')
  @IsNumber()
  heading: number;

  @Column('float')
  @IsNumber()
  speed: number;
}