import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int, {
    description: 'The ID of the task',
  })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @Field(() => String, {
    description: 'What needs to be done?',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  description?: string;

  @Field(() => Boolean, {
    description: 'Is the task done?',
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
