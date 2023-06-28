import { Sequelize } from 'sequelize-typescript';
import databaseConfig from 'src/config/database.config';
import { Idioma } from 'src/entities/Idioma.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(databaseConfig);
      sequelize.addModels([Idioma]);
      await sequelize.sync();
      return sequelize;
    },
  },
];