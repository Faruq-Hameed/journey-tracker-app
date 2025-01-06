import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';


export class SignUpDto {
  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  password: string;
}

// src/auth/dto/sign-in.dto.ts

export class SignInDto {
  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsString()
  password: string;
}