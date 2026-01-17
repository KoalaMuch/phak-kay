import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the hero section', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('should have correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/พักกาย|Phakkay/);
  });

  test('should navigate to highlights section', async ({ page }) => {
    await page.click('a[href="#highlights"]');
    await expect(page.locator('#highlights')).toBeInViewport();
  });

  test('should navigate to gallery section', async ({ page }) => {
    await page.click('a[href="#gallery"]');
    await expect(page.locator('#gallery')).toBeInViewport();
  });

  test('should navigate to benefits section', async ({ page }) => {
    await page.click('a[href="#benefits"]');
    await expect(page.locator('#benefits')).toBeInViewport();
  });

  test('should navigate to location section', async ({ page }) => {
    await page.click('a[href="#location"]');
    await expect(page.locator('#location')).toBeInViewport();
  });

  test('should navigate to contact section', async ({ page }) => {
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeInViewport();
  });
});

test.describe('Gallery', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#gallery"]');
  });

  test('should display gallery images', async ({ page }) => {
    const images = page.locator('#gallery img');
    await expect(images.first()).toBeVisible();
  });

  test('should filter images by time of day', async ({ page }) => {
    // Click morning filter
    const morningButton = page.getByRole('button', {
      name: /morning|ยามเช้า/i,
    });
    await morningButton.click();

    // Wait for animation
    await page.waitForTimeout(500);

    // Images should still be visible
    const images = page.locator('#gallery img');
    await expect(images.first()).toBeVisible();
  });

  test('should open lightbox when clicking an image', async ({ page }) => {
    const firstImage = page.locator('#gallery .cursor-pointer').first();
    await firstImage.click();

    // Lightbox should be visible
    const lightbox = page.locator('.fixed.inset-0');
    await expect(lightbox).toBeVisible();
  });
});

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#contact"]');
  });

  test('should display contact form', async ({ page }) => {
    const form = page.locator('#contact form');
    await expect(form).toBeVisible();
  });

  test('should show validation for required fields', async ({ page }) => {
    const submitButton = page.locator('#contact button[type="submit"]');
    await submitButton.click();

    // Form should not submit without required fields
    // The browser will show validation messages
    const nameInput = page.locator('#name');
    await expect(nameInput).toHaveAttribute('required');
  });

  test('should submit form with valid data', async ({ page }) => {
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#phone', '0812345678');

    const submitButton = page.locator('#contact button[type="submit"]');
    await submitButton.click();

    // Wait for submission
    await page.waitForTimeout(1000);

    // Success message should appear
    const successMessage = page.getByText(/thank you|ขอบคุณ/i);
    await expect(successMessage).toBeVisible();
  });
});

test.describe('Language Toggle', () => {
  test('should switch to English', async ({ page }) => {
    await page.goto('/');

    // Find and click English switch
    const langSwitch = page.getByRole('link', { name: /english/i });
    if (await langSwitch.isVisible()) {
      await langSwitch.click();
      await expect(page).toHaveURL(/\/en/);
    }
  });

  test('should switch to Thai', async ({ page }) => {
    await page.goto('/en');

    // Find and click Thai switch
    const langSwitch = page.getByRole('link', { name: /ภาษาไทย/i });
    await langSwitch.click();

    // Should redirect to Thai (root)
    await expect(page).not.toHaveURL(/\/en/);
  });
});

test.describe('Responsive Design', () => {
  test('should display mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.getByLabel('Toggle menu');
    await expect(menuButton).toBeVisible();
  });

  test('should hide desktop nav on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Desktop nav links should be hidden
    const desktopNav = page.locator('nav .hidden.md\\:flex');
    await expect(desktopNav).not.toBeVisible();
  });

  test('should show mobile menu when toggled', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.getByLabel('Toggle menu');
    await menuButton.click();

    // Mobile menu should be visible
    await page.waitForTimeout(500);
    const mobileMenu = page.locator('.md\\:hidden a[href="#highlights"]');
    await expect(mobileMenu).toBeVisible();
  });
});

test.describe('Performance', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(2000);

    // Filter out expected third-party errors
    const criticalErrors = errors.filter(
      (e) => !e.includes('third-party') && !e.includes('favicon')
    );
    expect(criticalErrors).toHaveLength(0);
  });
});
