import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TracksController } from './tracks.controller';
import { TracksService } from './tracks.service';
import { Track } from './entities/track.entity';
import { AuthModule } from '../auth/auth.module';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Track, User]),
    AuthModule, // Import AuthModule to use JwtService
  ],
  controllers: [TracksController],
  providers: [TracksService],
})
export class TracksModule {}
