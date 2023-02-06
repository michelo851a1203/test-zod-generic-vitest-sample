import { describe, expect, test } from "vitest";
import { mainFunction } from '.'

describe('test generic expression',() => {
  test('test success', () => {
    const testInput = {
      id: '11',
      currentValue: [{
        userName: 'testing hello',
        password: 'input password',
      }],
    }
    const result = mainFunction(testInput);
    expect(result).toBe(true);
  });

  test('not correct id type', () => {
    const testInput = {
      id: 23,
      currentValue: [{
        userName: 'testing hello',
        password: 'input password',
      }],
    }
    const result = mainFunction(testInput);
    expect(result).toBe(false);
  })

  test('not empty user name or password', () => {
    const testInput = {
      id: '11',
      currentValue: [{
        userName: '',
        password: 'input password',
      }],
    }
    const emptyUserNameValidated = mainFunction(testInput);
    expect(emptyUserNameValidated).toBe(false);

    const testInput2 = {
      id: '11',
      currentValue: [{
        userName: '',
        password: '',
      }],
    }
    const emptyPasswordValidated = mainFunction(testInput2);
    expect(emptyPasswordValidated).toBe(false);
  });

  test('not correct input', () => {
    const testInput = {
      id: '',
      currentValue: [{
        userName: 'testing hello',
        password: 'input password',
      }],
    }
    const result = mainFunction(testInput);
    expect(result).toBe(false);
  })
})
