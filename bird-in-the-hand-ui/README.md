# BirdInTheHand

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

## Application Routing Notes

Login Component is the initial page users will see when navigating to Bird-in-the-Hand. This is also the wildcard route for when a route match cannot be found. Login button routes users with an existing account directly to the Aviary component. Register button routes users to the Registration component. Successfully registering an account navigates new users to their Nest profile page. 

The Menu Bar is always present once logged in. This allows users to always navigate to the Nest or Aviary at will. They can also logout from here. Logging out of Bird-in-the-Hand returns users to the Login component.

## Registration Field Validation

Current requirements for registering an account with Bird-in-the-Hand are as follows:

Username: Required Field. Minimum username length is 3 characters.

Password: Required Field. Minimum password length is 6 characters. Passwords must contain at least one of each group: Uppercase, Lowercase, Number.

Email: Required Field. Must pass pattern recognition as valid email.

## Login Field Validation

Not currently implemented. Login using any username/password combination you choose! Even using neither. You will always be logged in as the user Jane Featherstone.

## Models

All objects currently being used are located in the models folder and imported into components as needed. This keeps a central area for reference.

## Github URL

Located at:

https://github.com/Joseph-Dibi/bird-in-the-hand

## Additional Resources ng serve --proxy-config proxy.conf.json

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
