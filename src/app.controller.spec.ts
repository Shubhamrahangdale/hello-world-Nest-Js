import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    // Create a testing module with Test.createTestingModule
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Specify controllers to test (in this case, only AppController)
      providers: [AppService], // Specify providers needed by AppController (in this case, AppService)
    }).compile(); // Compile the module

    // Get an instance of the AppController from the module
    appController = app.get<AppController>(AppController);
  });

  // Write test cases within describe blocks
  describe('root', () => {
    it('should return "Hello World!"', () => {
      // Test the getHello() method of AppController
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
