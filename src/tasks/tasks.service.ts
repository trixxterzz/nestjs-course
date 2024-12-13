import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}
  async getTasks(filterDTO: GetTasksFilterDTO, user: User): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDTO, user);
  }

  async createTask(createTaskDTO: CreateTaskDTO, user: User): Promise<Task> {
    const task = await this.tasksRepository.createTask(createTaskDTO, user);
    return task;
  }

  async getTaskById(id: string, user: User): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id, user } });

    if (!found) {
      throw new NotFoundException(
        'No such task or user doesn`t have an access to it',
      );
    }

    return found;
  }
  async updateTask(
    id: string,
    updateTaskStatusDTO: UpdateTaskStatusDTO,
    user,
  ): Promise<Task> {
    const { status } = updateTaskStatusDTO;
    const task = await this.getTaskById(id, user);
    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }

  async deleteTask(id: string, user: User): Promise<number> {
    const { affected } = await this.tasksRepository.deleteTask(id, user);
    if (affected === 0) {
      throw new NotFoundException('No such task');
    }
    return affected;
  }
}
