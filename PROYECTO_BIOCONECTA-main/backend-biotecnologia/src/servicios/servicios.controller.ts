import { Controller, Get, Post, Put, Body, Param, Delete, UsePipes, ValidationPipe, Req, UseGuards, Inject } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LogsService } from '../logs/logs.service';
import { ServiciosService } from './servicios.service';
import { Servicio } from './servicio.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@Controller('servicios')
export class ServiciosController {
  constructor(
    private readonly serviciosService: ServiciosService,
    @Inject(LogsService) private readonly logsService: LogsService,
  ) {}

  @Get()
  findAll(): Promise<Servicio[]> {
    return this.serviciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Servicio> {
    return this.serviciosService.findOne(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Administrador')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() data: CreateServicioDto, @Req() req): Promise<Servicio> {
    const servicio = await this.serviciosService.create(data);
    const usuario = req.user?.email || 'anonimo';
    await this.logsService.registrar(usuario, 'Creó un servicio');
    return servicio;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Administrador')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(@Param('id') id: string, @Body() data: Partial<CreateServicioDto>, @Req() req): Promise<Servicio> {
    const servicio = await this.serviciosService.update(Number(id), data);
    const usuario = req.user?.email || 'anonimo';
    await this.logsService.registrar(usuario, `Editó el servicio ${id}`);
    return servicio;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Administrador')
  async remove(@Param('id') id: string, @Req() req): Promise<void> {
    await this.serviciosService.remove(Number(id));
    const usuario = req.user?.email || 'anonimo';
    await this.logsService.registrar(usuario, `Eliminó el servicio ${id}`);
  }
}