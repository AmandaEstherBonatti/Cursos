import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthService } from './auth.service';

@Module({
  imports: [UsuarioModule],
  providers: [AuthService]
})
export class AuthModule { }
