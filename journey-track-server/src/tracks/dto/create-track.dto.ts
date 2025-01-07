import { IsString, IsNotEmpty, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { Point } from '../entities/point.entity';

export class CreateTrackDto {
  @IsString()
  @IsNotEmpty({ message: 'Track name is required' })
  name: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'At least one location is required' })
  @ValidateNested({ each: true })
  @Type(() => Point)
  locations: Point[];
}