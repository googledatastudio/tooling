import {ArgumentParser} from 'argparse';
import * as sut from '../src/args';

const parser = sut.getParser();
beforeAll(() => {
  ArgumentParser.prototype.error = (e) => {
    throw e;
  };
});

describe('For viz args', () => {
  test('too few arguments', () => {
    expect(() => parser.parseArgs(['viz'])).toThrow('too few arguments');
  });

  describe('start', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['viz', 'start']);
      expect(actual).toEqual({
        script: 'start',
        scriptChoice: 'viz',
      });
    });
  });

  describe('build', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['viz', 'build']);
      expect(actual).toEqual({
        deployment: null,
        script: 'build',
        scriptChoice: 'viz',
      });
    });
  });

  describe('push', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['viz', 'push']);
      expect(actual).toEqual({
        deployment: null,
        script: 'push',
        scriptChoice: 'viz',
      });
    });
  });

  describe('update_message', () => {
    test('missing format', () => {
      expect(() => parser.parseArgs(['viz', 'update_message'])).toThrow(
        /Argument .* is required/
      );
    });

    test('shortform format missing format', () => {
      expect(() => parser.parseArgs(['viz', 'update_message', '-f'])).toThrow(
        'Expected one argument'
      );
    });

    test('shortform format object', () => {
      const actual = parser.parseArgs([
        'viz',
        'update_message',
        '-f',
        'object',
      ]);
      expect(actual).toEqual({
        format: 'object',
        script: 'update_message',
        scriptChoice: 'viz',
      });
    });

    test('longform format object', () => {
      const actual = parser.parseArgs([
        'viz',
        'update_message',
        '--format',
        'object',
      ]);
      expect(actual).toEqual({
        format: 'object',
        script: 'update_message',
        scriptChoice: 'viz',
      });
    });

    test('shortform format table', () => {
      const actual = parser.parseArgs(['viz', 'update_message', '-f', 'table']);
      expect(actual).toEqual({
        format: 'table',
        script: 'update_message',
        scriptChoice: 'viz',
      });
    });

    test('longform format table', () => {
      const actual = parser.parseArgs([
        'viz',
        'update_message',
        '--format',
        'table',
      ]);
      expect(actual).toEqual({
        format: 'table',
        script: 'update_message',
        scriptChoice: 'viz',
      });
    });
  });
});

describe('For connector args', () => {
  test('too few arguments', () => {
    expect(() => parser.parseArgs(['connector'])).toThrow('too few arguments');
  });

  describe('push_changes', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['connector', 'push_changes']);
      expect(actual).toEqual({
        script: 'push_changes',
        scriptChoice: 'connector',
        forcePushChanges: false,
      });
    });

    test('force changes shorthand', () => {
      const actual = parser.parseArgs(['connector', 'push_changes', '-f']);
      expect(actual).toEqual({
        script: 'push_changes',
        scriptChoice: 'connector',
        forcePushChanges: true,
      });
    });

    test('force changes longhand', () => {
      const actual = parser.parseArgs(['connector', 'push_changes', '--force']);
      expect(actual).toEqual({
        script: 'push_changes',
        scriptChoice: 'connector',
        forcePushChanges: true,
      });
    });
  });

  describe('watch_changes', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['connector', 'watch_changes']);
      expect(actual).toEqual({
        script: 'watch_changes',
        scriptChoice: 'connector',
      });
    });
  });

  describe('open_script', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['connector', 'open_script']);
      expect(actual).toEqual({
        script: 'open_script',
        scriptChoice: 'connector',
      });
    });
  });

  describe('try_production', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['connector', 'try_production']);
      expect(actual).toEqual({
        script: 'try_production',
        scriptChoice: 'connector',
      });
    });
  });

  describe('try_latest', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['connector', 'try_latest']);
      expect(actual).toEqual({
        script: 'try_latest',
        scriptChoice: 'connector',
      });
    });
  });

  describe('update_production', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['connector', 'update_production']);
      expect(actual).toEqual({
        script: 'update_production',
        scriptChoice: 'connector',
      });
    });
  });

  describe('open_template', () => {
    test('no additional args', () => {
      const actual = parser.parseArgs(['connector', 'open_template']);
      expect(actual).toEqual({
        script: 'open_template',
        scriptChoice: 'connector',
      });
    });
  });
});
