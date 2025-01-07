
import { SetMetadata } from '@nestjs/common';


// Define a metadata key for marking API endpoints as public
export const IS_PUBLIC_API = 'isPublic';
// Decorator that marks a class as a public API endpoint
// Create a decorator named Public function to set the metadata for public API endpoints
export const Public = () => SetMetadata(IS_PUBLIC_API, true);
