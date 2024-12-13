import { DataSource, DeleteResult, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { User } from 'src/auth/user.entity';
export declare class TasksRepository extends Repository<Task> {
    private dataSource;
    constructor(dataSource: DataSource);
    createTask(createTaskDTO: CreateTaskDTO, user: User): Promise<Task>;
    deleteTask(id: string, user: User): Promise<DeleteResult>;
    getTasks(filterDTO: GetTasksFilterDTO, user: User): Promise<Task[]>;
}
