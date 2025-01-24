import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
// Correctly import the `connect` method from ngrok
import { connect } from 'ngrok';

@Injectable()
export class NgrokService implements OnApplicationBootstrap {
  private readonly logger = new Logger(NgrokService.name);

  async onApplicationBootstrap() {
    try {
      const url = await connect(3000); // Use `connect` directly
      this.logger.log(`Ngrok is running: ${url}`);
    } catch (error) {
      this.logger.error('Failed to start ngrok', error.message);
    }
  }
}
