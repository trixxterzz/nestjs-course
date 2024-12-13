"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const tasks_repository_1 = require("./tasks.repository");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async getTasks(filterDTO, user) {
        return this.tasksRepository.getTasks(filterDTO, user);
    }
    async createTask(createTaskDTO, user) {
        const task = await this.tasksRepository.createTask(createTaskDTO, user);
        return task;
    }
    async getTaskById(id, user) {
        const found = await this.tasksRepository.findOne({ where: { id, user } });
        if (!found) {
            throw new common_1.NotFoundException('No such task or user doesn`t have an access to it');
        }
        return found;
    }
    async updateTask(id, updateTaskStatusDTO, user) {
        const { status } = updateTaskStatusDTO;
        const task = await this.getTaskById(id, user);
        task.status = status;
        await this.tasksRepository.save(task);
        return task;
    }
    async deleteTask(id, user) {
        const { affected } = await this.tasksRepository.deleteTask(id, user);
        if (affected === 0) {
            throw new common_1.NotFoundException('No such task');
        }
        return affected;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tasks_repository_1.TasksRepository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map