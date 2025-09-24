// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { RolesModule } from './roles/roles.module';
import { TareasModule } from './tareas/tareas.module';
import { HitosModule } from './Hitos/hitos.module';
import { DocumentosModule } from './Documentos/documentos.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { LogsModule } from './logs/logs.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',   
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'bioconeecta',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,
    AuthModule,
    ProyectosModule,
    ServiciosModule,
    RolesModule,
    TareasModule,
    HitosModule,
    DocumentosModule,
    LogsModule,
    ReservasModule,
  ],
 
})
export class AppModule {}

