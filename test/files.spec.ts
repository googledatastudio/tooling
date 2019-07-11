import * as sut from '../src/files';
import {PWD} from '../src/constants';
import * as path from 'path';
import * as fs from 'mz/fs';
import * as shelljs from 'shelljs';

describe('For the file utility', () => {
  describe('remove', () => {
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
  describe('cp', () => {
    const filename = 'hi.fake.jpg';

    test('Copies individual file', async () => {
      const source = path.join(PWD, filename);
      const destination = path.join(PWD, filename + '.destination');
      shelljs.touch(source);

      sut.cp([source], [destination]);
      expect(await fs.exists(destination)).toBeTruthy();

      sut.remove(source);
      sut.remove(destination);
    });

    test('Copies folder recursively', async () => {
      const source = path.join(PWD, 'copy-from-me');
      const destination = path.join(PWD, 'place-to-copy');
      const sub = 'sub-folder';
      // Make source folders
      await sut.mkdir(source);
      await sut.mkdir(path.join(source, sub));
      // Make source files
      shelljs.touch(path.join(source, filename));
      shelljs.touch(path.join(source, sub, filename));

      const actual = await sut.cp([source], [destination]);
      expect(actual).toBe(true);
      expect(await fs.exists(path.join(destination, filename))).toBeTruthy();
      expect(
        await fs.exists(path.join(destination, sub, filename))
      ).toBeTruthy();

      sut.remove(source);
      sut.remove(destination);
    });
  });
});
