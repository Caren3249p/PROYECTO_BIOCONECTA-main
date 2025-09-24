import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './tarea.entity';
import { Proyecto } from '../proyectos/proyectos.entity';
import { Usuario } from '../usuarios/usuarios.entity';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea, Proyecto, Usuario])],
  providers: [TareasService],
  controllers: [TareasController],
})
export class TareasModule {}