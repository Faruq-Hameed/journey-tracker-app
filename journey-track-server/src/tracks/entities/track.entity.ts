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
    name: string; //track name as written by the user
  
    @Column('json')
    locations: Point[]; //array of points where the user added for the track
  
    @ManyToOne(() => User, (user) => user.tracks)
    user: User;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }