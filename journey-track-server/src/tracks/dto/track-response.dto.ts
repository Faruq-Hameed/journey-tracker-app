import { Exclude, Expose } from 'class-transformer';
import { Point } from '../entities/point.entity';

@Exclude()
export class TrackResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  locations: Point[];

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  constructor(partial: Partial<TrackResponseDto>) {
    Object.assign(this, partial);
  }
}