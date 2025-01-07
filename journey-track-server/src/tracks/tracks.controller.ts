import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { Point } from './entities/point.entity';
import { CreateTrackDto } from './dto/create-track.dto';
@Controller('tracks')
@UseGuards(JwtAuthGuard)
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  findAll(@GetUser() user: User) {
    return this.tracksService.findAll(user);
  }

  @Post()
  create(
    @Body() createTrackDto: CreateTrackDto,
    @GetUser() user: User,
  ) {
    return this.tracksService.create(createTrackDto, user);
  }
}
