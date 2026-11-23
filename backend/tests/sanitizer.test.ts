import { sanitizePromptInput } from '../src/utils/sanitizer';

describe('Prompt Sanitizer', () => {
  it('should strip bracket injections from prompt input', () => {
    const raw = 'Exploit {{System.exit()}} attempt';
    expect(sanitizePromptInput(raw)).toBe('Exploit System.exit() attempt');
  });
});
