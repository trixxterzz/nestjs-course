import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  imports: [TypeOrmModule.forFeature([Task]), AuthModule],
})
export class TasksModule {}
