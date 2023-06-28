import { Module } from '@nestjs/common';
import { AppController } from './modules/module-app/app.controller';
import { AppService } from './modules/module-app/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
