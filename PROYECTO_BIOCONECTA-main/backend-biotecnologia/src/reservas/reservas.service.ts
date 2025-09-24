import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './reserva.entity';
import { Servicio } from '../servicios/servicio.entity';
import { Usuario } from '../usuarios/usuarios.entity';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(data: { servicioId: number; usuarioId: number; fechaServicio: string; estado?: string }): Promise<Reserva> {
    // Validar disponibilidad: no permitir dos reservas del mismo servicio en la misma fecha
    const existe = await this.reservaRepository.findOne({
      where: { servicio: { id: data.servicioId }, fechaServicio: data.fechaServicio },
    });
    if (existe) {
      throw new BadRequestException('El servicio ya está reservado en esa fecha');
    }
    const servicio = await this.servicioRepository.findOneBy({ id: data.servicioId });
    const usuario = await this.usuarioRepository.findOneBy({ id: data.usuarioId });
    if (!servicio || !usuario) throw new BadRequestException('Servicio o usuario no encontrado');
    const reserva = this.reservaRepository.create({
      servicio,
      usuario,
      fechaServicio: data.fechaServicio,
      estado: data.estado || 'pendiente',
    });
    return this.reservaRepository.save(reserva);
  }

  findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find();
  }

  async update(id: number, estado: string): Promise<Reserva | null> {
    await this.reservaRepository.update(id, { estado });
    return this.reservaRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.reservaRepository.delete(id);
  }
}
