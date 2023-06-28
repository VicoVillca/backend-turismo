import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'idioma' })
export class Idioma extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    id_idioma: number;
  
    @Column
    esp: string;
  
    @Column
    ing: string;
  
    @Column
    fra: string;
}