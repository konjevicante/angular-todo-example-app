# Todo MVC - Angular Example App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Local Development 

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Development server

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Development server

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running with Docker  

Run following commands to build the image and run the container on port 4300.

`$ docker build -t angular-todo-example-app . `

`$ docker run -d -it -p 4300:4300 --name=AngularTodoExample angular-todo-example-app`

## Testing 

@todo Add tests.
