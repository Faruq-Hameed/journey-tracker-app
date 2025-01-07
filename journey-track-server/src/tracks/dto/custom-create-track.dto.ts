import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

// Create a custom validator that implements ValidatorConstraintInterface
@ValidatorConstraint({ name: 'CustomTrackValidator', async: false }) // `name` gives an identifier, and `async` false for synchronous validation
export class CustomTrackValidator implements ValidatorConstraintInterface {
  
  // This method defines the validation logic
  validate(value: any, args: ValidationArguments) {
    // Destructure the input object to check both properties
    const { name, locations } = value;
    // Return true if name is a non-empty string and locations is a non-empty array
    return (
      typeof name === 'string' &&
      name.trim().length > 0 &&
      Array.isArray(locations) &&
      locations.length > 0
    );
  }

  // This method returns the default error message if validation fails
  defaultMessage(args: ValidationArguments) {
    return 'You must provide a name and locations'; // Custom error message
  }
}
