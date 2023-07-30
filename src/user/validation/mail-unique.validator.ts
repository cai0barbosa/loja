import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({async: true})
export class MailUniqueValidator implements ValidatorConstraintInterface {
  constructor(private UserRepository: UserRepository) { }

  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const user = await this.UserRepository.userExistsByEmail(value)
    return !user
  }
}

export const MailUnique = (validationOptions: ValidationOptions) => {
  return (object: Object , props: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: MailUniqueValidator
    })
  }
}
