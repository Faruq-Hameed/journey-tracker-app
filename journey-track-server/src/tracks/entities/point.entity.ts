import { Column } from 'typeorm';
import { IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Coords } from './coords.entity';

export class Point {
  @Column('bigint')
  @IsNumber()
  timestamp: number;

  @Column(() => Coords)
  @ValidateNested()
  @Type(() => Coords)
  coords: Coords;
}