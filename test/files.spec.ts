import * as sut from '../src/files';
import {PWD} from '../src/constants';
import * as path from 'path';
import * as fs from 'mz/fs';

describe('For the file utility', () => {
  describe('removeDirectory', () => {
    const existingDirectory = path.join(PWD, 'existing-directory');
    const nonExistingDirectory = path.join(PWD, 'non-existing-directory');

    test('Works when directory exists', async () => {
      await sut.mkdir(existingDirectory);
      expect(await fs.exists(existingDirectory)).toBe(true);

      const actual = await sut.remove(existingDirectory);
      expect(actual).toBe(true);

      expect(await fs.exists(existingDirectory)).toBe(false);
    });

    test('Throws when directory does not exist', async () => {
      expect(await fs.exists(nonExistingDirectory)).toBe(false);
      expect(sut.remove(nonExistingDirectory)).rejects.toThrow(
        'does not exist'
      );
    });
  });
});
