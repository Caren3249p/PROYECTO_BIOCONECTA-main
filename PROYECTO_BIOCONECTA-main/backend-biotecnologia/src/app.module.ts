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
import { LogsModule } from './logs/logs.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'biotec',             // ✅ Usuario principal
      password: 'oki31xdc!#biotec',   // ✅ Contraseña de biotec
      database: 'mydb',               // ✅ Base de datos creada
      autoLoadEntities: true,         // ✅ ya se cargan las entidades
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

