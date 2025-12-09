import path from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: Number(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USERNAME || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'supertux',
        database: process.env.POSTGRES_DB || 'typeorm',
        synchronize: false,
        migrations: [path.join(__dirname, '..', '..', 'migrations', '*.js')],
        migrationsRun: true,
        //logging: true,
        logging: ['query', 'schema'],
      });

      return dataSource.initialize();
    },
  },
];
