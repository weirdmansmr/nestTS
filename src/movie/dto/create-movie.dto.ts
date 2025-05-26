import {
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  Max,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1800)
  @Max(new Date().getFullYear())
  releaseYear: number;

  @IsOptional()
  @IsBoolean()
  isPublic: boolean;
}
