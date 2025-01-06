import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne, 
    CreateDateColumn,
    UpdateDateColumn 
  } from 'typeorm';
  import { User } from '../../auth/entities/user.entity';
  import { Point } from './point.entity';
  
  @Entity()
  export class Track {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column('json')
    locations: Point[];
  
    @ManyToOne(() => User, (user) => user.tracks)
    user: User;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }