import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsuarioController } from './usuario.controller';
import { usuarioProviders } from './usuario.provider';
import { UsuarioService } from './usuario.service';


@Module({
    imports: [DatabaseModule],
    controllers: [UsuarioController],
    providers: [
        ...usuarioProviders,
        UsuarioService,
    ],
    exports: [UsuarioService]
})
export class UsuarioModule { }