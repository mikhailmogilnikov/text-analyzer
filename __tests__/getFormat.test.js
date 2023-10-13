import { expect, test } from 'bun:test';

import { getFormat, isClassified } from '../src/scripts/fileFormat.js';

test('getFormat', () => {
  const file1 = 'ФМУ-76_1219_27.07.2023.pdf';
  expect(getFormat(file1)).toBe('ФМУ76');
  const file2 = 'ФМУ76_1329_26.03.2023.pdf';
  expect(getFormat(file2)).toBe('ФМУ76');
  const file3 = 'фму-76_2306_26.05.2023.pdf';
  expect(getFormat(file3)).toBe('ФМУ76');
  const file4 = 'ФМУ 76_790_15082023.pdf';
  expect(getFormat(file4)).toBe('ФМУ76');
  const file5 = '790_15082023.pdf';
  expect(getFormat(file5)).toBe(null);
  const file6 = '';
  expect(getFormat(file6)).toBe(null);
});

test('isClassified', () => {
  const file1 = 'М-11_1219_27.07.2023.pdf';
  expect(isClassified(file1)).toBe(true);
  const file2 = '1329_26.03.2023.pdf';
  expect(isClassified(file2)).toBe(false);
  const file3 = '';
  expect(isClassified(file3)).toBe(false);
});
