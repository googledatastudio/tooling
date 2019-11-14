import * as fs from 'fs';
import * as sut from '../src/files';
import {PWD} from '../src/constants';
import * as path from 'path';
import * as shelljs from 'shelljs';

describe('For the file utility', () => {
  describe('remove', () => {
    const existingDirectory = path.join(PWD, 'existing-directory');
    const nonExistingDirectory = path.join(PWD, 'non-existing-directory');

    test('Works when directory exists', async () => {
      sut.mkdir(existingDirectory);
      expect(fs.existsSync(existingDirectory)).toBe(true);
      const actual = sut.remove(existingDirectory);
      expect(actual).toBe(true);

      expect(fs.existsSync(existingDirectory)).toBe(false);
    });

    test('Throws when directory does not exist', async () => {
      expect(fs.existsSync(nonExistingDirectory)).toBe(false);
      expect(() => sut.remove(nonExistingDirectory)).toThrow();
    });
  });

  describe('cp', () => {
    const filename = 'hi.fake.jpg';
    test('Copies individual file', async () => {
      const source = path.join(PWD, filename);
      const destination = path.join(PWD, filename + '.destination');
      shelljs.touch(source);
      sut.cp([source], [destination]);
      expect(fs.existsSync(destination)).toBeTruthy();
      sut.remove(source);
      sut.remove(destination);
    });

    test('Copies folder recursively', async () => {
      const source = path.join(PWD, 'copy-from-me');
      const destination = path.join(PWD, 'place-to-copy');
      const sub = 'sub-folder';
      // Make source folders
      sut.mkdir(source);
      sut.mkdir(path.join(source, sub));
      // Make source files
      shelljs.touch(path.join(source, filename));
      shelljs.touch(path.join(source, sub, filename));

      const actual = sut.cp([source], [destination]);
      expect(actual).toBe(true);
      expect(fs.existsSync(path.join(destination, filename))).toBeTruthy();
      expect(fs.existsSync(path.join(destination, sub, filename))).toBeTruthy();

      sut.remove(source);
      sut.remove(destination);
    });
  });

  describe('mv', () => {
    test('Moves file successfully', async () => {
      const sourceDir = path.join(PWD, 'my-dir');
      const source = path.join(sourceDir, 'my-file');
      shelljs.mkdir(sourceDir);
      shelljs.touch(source);
      const destinationDir = PWD;
      const destination = path.join(destinationDir, 'my-file');
      expect(fs.existsSync(destination)).toBeFalsy();
      sut.mv([source], [destinationDir]);
      expect(fs.existsSync(destination)).toBeTruthy();
      sut.remove(sourceDir);
      sut.remove(destination);
    });
  });

  describe('rename', () => {
    test('renames a file sucessfully', async () => {
      const source = path.join(PWD, 'my-rename-file');
      const dest = path.join(PWD, 'my-new-name');
      shelljs.touch(source);
      expect(fs.existsSync(dest)).toBeFalsy();
      sut.rename([source], [dest]);
      expect(fs.existsSync(dest)).toBeTruthy();
      sut.remove(dest);
    });
  });
});
