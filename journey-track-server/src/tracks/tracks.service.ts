import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from './entities/track.entity';
import { User } from 'src/user/entities/user.entity';
import { Point } from './entities/point.entity';
@Injectable()
export class TracksService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
  ) {}

  async findAll(user: User) {
    return this.trackRepository.find({
      where: { user: { id: user.id } },
    });
  }

  async create(createTrackDto: { name: string; locations: Point[] }, user: User) {
    const track = this.trackRepository.create({
      ...createTrackDto,
      user,
    });
    return this.trackRepository.save(track);
  }
}

