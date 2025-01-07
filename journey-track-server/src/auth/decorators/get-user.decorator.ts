import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// This is a decorator that will be used in the controller to get the user from the request object
export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest(); // get the request object from the request object
    return request.user;
  },
);