import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { PostMiddleWare } from './post.middleware';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UserModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('users')
      consumer.apply(PostMiddleWare).forRoutes('posts')
  }
}
