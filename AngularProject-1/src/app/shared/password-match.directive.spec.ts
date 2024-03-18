import { PasswordMatchDirective } from './password-match.directive';
import { FormGroup, FormControl } from '@angular/forms';

describe('PasswordMatchDirective', () => {
  it('should create an instance', () => {
    const directive = new PasswordMatchDirective();
    expect(directive).toBeTruthy();
  });

  it('should validate password match correctly', () => {
    const directive = new PasswordMatchDirective();
    const formGroup = new FormGroup({
      password: new FormControl('123456'),
      confirmPassword: new FormControl('123456')
    });

    expect(directive.validate(formGroup)).toBeNull(); // Expect no error for matching passwords

    formGroup.controls['confirmPassword'].setValue('654321');
    expect(directive.validate(formGroup)).toEqual({ passwordMismatch: true }); // Expect an error for non-matching passwords
  });
});
