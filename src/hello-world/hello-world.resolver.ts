import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Retorna hola mundo',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hello, World!';
  }

  @Query(() => Float, {
    name: 'randomNumber',
    description: 'Retorna un número random',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description:
      'Retorna un número random de 0 a n (n excluido). Por defecto n=6',
  })
  getRandomNumberFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
