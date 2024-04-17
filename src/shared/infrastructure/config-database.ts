import { TypeOrmModule } from '@nestjs/typeorm';
export const CONFIG_DATABASE = () =>
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'serveless.conwlmo1rdqe.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: 'LMnxFHN52vHaGZXOmHu6',
    database: 'serveless',
    autoLoadEntities: true,
  });
