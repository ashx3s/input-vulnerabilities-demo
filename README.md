# README

## Questions

- Why is input validation critical for web security?
- What makes sql injection a common vulnerability? why is it dangerous?
- What are common pitfalls developers face when implementing validation?

## Tasks

- Client side validations for UX:
  -Name: Only allow alphabetic characters and limit the length to 50 characters.
  - Email: Use a regular expression to ensure the input follows standard email formatting (e.g., username@domain.com).
  - Phone: Validate to allow only numeric characters and limit to a specific format, such as (123) 456-7890.
  - Message: Restrict input to plain text, disallowing HTML tags and special characters.
- Security Policy
  - html loaded (not recommended)
  ```
   <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' https://trusted-cdn.com;"
    />
  ```

### Resources

- [client side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [js form validation](
  Name: Only allow alphabetic characters and limit the length to 50 characters.
  Email: Use a regular expression to ensure the input follows standard email formatting (e.g., username@domain.com).
  Phone: Validate to allow only numeric characters and limit to a specific format, such as (123) 456-7890.
  Message: Restrict input to plain text, disallowing HTML tags and special characters.
  )

## Input Validation Quick Notes

- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- Syntactic (enforce ccorrect syntax)
- Semantic (enforce correct values for their context)
- Client side (validation done at the point where users input content -- can be circumvented with web proxys): this improves UX more
- Server side (validation on the server before the data is processed by the application): this improves security more
- [Validity.valid](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) used with html inputs
- [Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)

## Class Discussion

- Reconnect as a class to discuss this activity and answer the following questions:
  - Did you find any unusual or surprising ways to exploit the contact form?
  - Are there validation rules or techniques you would modify or add? Why?
- Individually, reflect on the activity by answering the following questions:
  - How has this activity changed your understanding of input validation?
  - What new skills or techniques did you learn that you can apply to future projects?
  - What would you do differently if you were to repeat this activity?
