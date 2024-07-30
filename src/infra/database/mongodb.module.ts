import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Adiciona o ConfigModule
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('DATABASE_URI');
        const dbName = configService.get<string>('DATABASE_NAME');
        return {
          uri: `${uri}/${dbName}`,
          user: configService.get<string>('DATABASE_USER'),
          pass: configService.get<string>('DATABASE_PASS'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
      },
    }),
  ],
})
export class MongodbModule {}
