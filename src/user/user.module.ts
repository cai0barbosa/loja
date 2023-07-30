import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { MailUniqueValidator } from './validation/mail-unique.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, MailUniqueValidator],
})
export class UserModule {}
