import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Accordion test', () => {
  test('should show title all the time', () => {
    render(<Button label="hello" />);

    expect(screen.getByText(/hello/i)).toBeDefined();
  });
});
