import { transformText } from '../helpers';

describe('helpers', () => {
  describe('transformText', () => {
    test('should trim small text', () => {
      expect(transformText('text')).toBe('text');
      expect(transformText('  small text  ')).toBe('small text');
    });

    test('should trim and cut very big text', () => {
      const input = '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati beatae nulla facere veritatis dolores quibusdam aut accusantium, dolor culpa quisquam assumenda, vitae ipsum ratione repellat, placeat molestiae. Pariatur, exercitationem tempora.      ';
      const expected = 'Lorem ipsum dolor sit amet consectetur adipisicing...';
      expect(transformText(input)).toBe(expected);
    });
  });
});
