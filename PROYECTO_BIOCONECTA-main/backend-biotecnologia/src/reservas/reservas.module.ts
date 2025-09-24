import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { Reserva } from './reserva.entity';
import { Servicio } from '../servicios/servicio.entity';
import { Usuario } from '../usuarios/usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, Servicio, Usuario])],
  providers: [ReservasService],
  controllers: [ReservasController],
  exports: [ReservasService],
})
export class ReservasModule {}
