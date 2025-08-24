import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 8745,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'supertux',
      database: process.env.DB_DATABASE || 'exemplo',
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      migrationsRun: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
