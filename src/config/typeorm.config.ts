import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function getTypeOrmConfig(
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    host: configService.getOrThrow<string>('POSTGRESQL_HOST'),
    port: configService.getOrThrow<number>('POSTGRESQL_PORT'),
    username: configService.getOrThrow<string>('POSTGRESQL_USER'),
    password: configService.getOrThrow<string>('POSTGRESQL_PASSWORD'),
    database: configService.getOrThrow<string>('POSTGRESQL_DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
  };
}
