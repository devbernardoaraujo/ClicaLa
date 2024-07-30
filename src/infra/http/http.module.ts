import { Module } from "@nestjs/common";
import { DataBaseModule } from "../database/database.module";
import { CryptographyModule } from "../cryptography/cryptography.module";
import { LoginUserController } from "./controllers/user-login.controller";
import { NestLoginUserUseCase } from "../representations/nest-user-login-use-case";
import { CreateLinkController } from "./controllers/create-link.controller";
import { NestCreateLinkUseCase } from "../representations/nest-create-link-use-case";
import { MongodbModule } from "../database/mongodb.module";

@Module({
  imports: [DataBaseModule, CryptographyModule],
  controllers: [
    LoginUserController,
    CreateLinkController,
    ],
  providers: [
    NestLoginUserUseCase,
    NestCreateLinkUseCase,
    MongodbModule,
  ],
})
export class HttpModule {}
