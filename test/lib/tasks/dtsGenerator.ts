import {describe, it, expect} from 'vitest';
import task from '../../../src/index';

describe('ui5-task-dts-generator', () => {
  it('should be a function', () => {
    expect(typeof task).toBe('function');
  });
});
