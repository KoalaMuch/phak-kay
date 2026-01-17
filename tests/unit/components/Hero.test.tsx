import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';

// Mock next/image - filter out Next.js specific props
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    alt,
    src,
    className,
    sizes,
    loading,
    ...rest
  }: {
    alt: string;
    src: string;
    className?: string;
    sizes?: string;
    loading?: string;
    [key: string]: unknown;
  }) => <img alt={alt} src={src} className={className} />,
}));

describe('Hero Component', () => {
  it('should render the hero section', () => {
    render(<Hero />);

    // The component should render
    const heroSection = document.querySelector('section');
    expect(heroSection).toBeInTheDocument();
  });

  it('should contain title text', () => {
    render(<Hero />);

    // Using the translation key as the mock returns the key
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('should contain CTA button', () => {
    render(<Hero />);

    expect(screen.getByText('cta')).toBeInTheDocument();
  });

  it('should have links to sections', () => {
    render(<Hero />);

    const highlightsLink = screen.getByText('cta').closest('a');
    expect(highlightsLink).toHaveAttribute('href', '#highlights');
  });
});
