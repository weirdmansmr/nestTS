import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { StartsWith } from '../decorators/starts-with.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @StartsWith('Задача:')
  @Length(2, 20)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  priority: number;

  @IsOptional()
  @IsArray()
  @IsEnum(TaskTag, { each: true })
  tags: TaskTag[];

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/)
  password: string;

  @IsUrl({ protocols: ['https'] })
  website: string;

  @IsUUID('4')
  userId: string;
}
