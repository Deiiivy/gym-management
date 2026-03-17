import { UserRole } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Bryan' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Lopez' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'owner@test.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.GYM_OWNER,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiPropertyOptional({ example: '3001234567' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: 'cmmttxyz123' })
  @IsOptional()
  @IsString()
  gymId?: string;

  @ApiPropertyOptional({ example: 'Power House Gym' })
  @IsOptional()
  @IsString()
  gymName?: string;

  @ApiPropertyOptional({ example: 'power-house-gym' })
  @IsOptional()
  @IsString()
  gymSlug?: string;
}