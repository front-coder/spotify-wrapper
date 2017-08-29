/*

Desafio FizzBuzz

Escreva uma lib que receba um número e:

Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
Se não for múltiplo de nada, retorna o número

 */

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('Should return Fizz when multiple of 3 ', () => {
    expect(FizzBuzz(3)).to.equal('Fizz');
    expect(FizzBuzz(6)).to.equal('Fizz');
  });

  it('Should retunr Buzz when multiple of 5', () => {
    expect(FizzBuzz(5)).to.equal('Buzz');
    expect(FizzBuzz(10)).to.equal('Buzz');
  });

  it('Should return FizzBuzz when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.equal('FizzBuzz');
    expect(FizzBuzz(45)).to.equal('FizzBuzz');
  });

  it('Should retunr the number when non-multiple', () => {
    expect(FizzBuzz(23)).to.equal(23);
  });

  it('Should return 0 when 0', () => {
    expect(FizzBuzz(0)).to.equal(0);
  });
});

