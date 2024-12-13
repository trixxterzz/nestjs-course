import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';
export declare class TasksController {
    private tasksService;
    private logger;
    constructor(tasksService: TasksService);
    getTasks(filterDTO: GetTasksFilterDTO, user: User): Promise<Task[]>;
    createTask(createTaskDTO: CreateTaskDTO, user: User): Promise<Task>;
    getTask(id: string, user: User): Promise<Task>;
    updateTask(id: string, updateTaskStatusDTO: UpdateTaskStatusDTO, user: User): Promise<Task>;
    deleteTask(id: string, user: User): Promise<number>;
}
