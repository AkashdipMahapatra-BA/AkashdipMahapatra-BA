import { slugify } from '../../src/utils/helpers';
test('slugify', () => expect(slugify('Hello World')).toBe('hello-world'));
