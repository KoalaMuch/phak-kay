import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '@/components/Navigation';

describe('Navigation Component', () => {
  it('should render the navigation', () => {
    render(<Navigation />);

    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Navigation />);

    expect(screen.getByText('highlights')).toBeInTheDocument();
    expect(screen.getByText('gallery')).toBeInTheDocument();
    expect(screen.getByText('benefits')).toBeInTheDocument();
    expect(screen.getByText('location')).toBeInTheDocument();
    expect(screen.getByText('contact')).toBeInTheDocument();
  });

  it('should render language switch button', () => {
    render(<Navigation />);

    expect(screen.getAllByText('switch').length).toBeGreaterThan(0);
  });

  it('should have correct href for navigation links', () => {
    render(<Navigation />);

    const highlightsLink = screen.getAllByText('highlights')[0].closest('a');
    expect(highlightsLink).toHaveAttribute('href', '#highlights');
  });

  it('should have mobile menu button', () => {
    render(<Navigation />);

    const menuButton = screen.getByLabelText('Toggle menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('should toggle mobile menu on button click', () => {
    render(<Navigation />);

    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);

    // After clicking, mobile menu should be visible
    // The mobile menu items should now be rendered
    const mobileMenuItems = document.querySelectorAll('a[href="#highlights"]');
    expect(mobileMenuItems.length).toBeGreaterThan(1);
  });
});
