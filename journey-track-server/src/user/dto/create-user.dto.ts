import { IsEmail, IsString, IsOptional, MinLength, MaxLength, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  password: string;

  @IsString()
  // @IsOptional()
  firstname: string;

  @IsString()
  // @IsOptional()
  // lastname?: string;
  lastname: string;

  @IsString()
  // @IsOptional()
  phonenumber: string;
}