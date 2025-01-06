import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TracksModule } from './tracks/tracks.module';

@Module({
  imports: [ AuthModule, TracksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
