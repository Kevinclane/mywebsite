# Mywebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Deployment steps

1. Checkout gh-pages and merge main
2. Run ng build --output-path docs --base-href /mywebsite/
3. Go into docs/browser/index.html and edit base tag's href to "/" (It tries to load from C drive by default even with base href declared)
4. Copy all contents in browser folder
5. Paste files into docs folder (parent to browser)
* (Optional) create CNAME file in docs directory - set to live domain abc.com
6. Commit and Push
7. Go into repository settings and change custom domain to live domain if no cname added
- It may take a few minutes for the DNS host to update changes.
- Enable development mode to speed up the process.