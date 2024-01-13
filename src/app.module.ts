import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { PostMiddleWare } from './post.middleware';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PostsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    //need to add middleware for each set of routes
      consumer.apply(LoggerMiddleware).forRoutes('users')
      consumer.apply(PostMiddleWare).forRoutes('posts')
  }
}
