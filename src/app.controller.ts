import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/*
AppService: Holds all the functions for the service for the routes starting with "/"
In this example we have a service that has one function that returns "Hello World"
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
