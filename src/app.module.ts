import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { AuthgoogleModule } from './authgoogle/authgoogle.module';
import { WsGateway } from './socket/ws.gateway';
import { DecesModule } from './deces/deces.module';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { EnvironnementModule } from './environnement/environnement.module';
import { TypeAlimentModule } from './type_aliment/type_aliment.module';
import { TypeMedicamentModule } from './type_medicament/type_medicament.module';
import { TypeVollaileModule } from './type_vollaile/type_vollaile.module';
import { VagueModule } from './vague/vague.module';
import { VenteModule } from './vente/vente.module';



@Module({

  imports: [PrismaModule, UserModule, ConfigModule.forRoot(), AuthModule, NodemailerModule, AuthgoogleModule, DecesModule, EntrepriseModule, EnvironnementModule, TypeAlimentModule, TypeMedicamentModule, TypeVollaileModule, VagueModule, VenteModule],
  providers : [WsGateway]
})
export class AppModule {}
