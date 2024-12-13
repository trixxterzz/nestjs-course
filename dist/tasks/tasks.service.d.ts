import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTasks(filterDTO: GetTasksFilterDTO, user: User): Promise<Task[]>;
    createTask(createTaskDTO: CreateTaskDTO, user: User): Promise<Task>;
    getTaskById(id: string, user: User): Promise<Task>;
    updateTask(id: string, updateTaskStatusDTO: UpdateTaskStatusDTO, user: any): Promise<Task>;
    deleteTask(id: string, user: User): Promise<number>;
}
