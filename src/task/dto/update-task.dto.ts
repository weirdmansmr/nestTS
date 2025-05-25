import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Данные должны быть сторковыми' })
  @IsNotEmpty({ message: 'Описание пустое' })
  @Length(2, 20, { message: 'Длина от 2 до 20 символов' })
  title: string;
  @IsBoolean({ message: 'Либо истина, либо ложь' })
  isCompleted: boolean;
}
