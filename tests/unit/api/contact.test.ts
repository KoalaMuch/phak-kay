/**
 * @jest-environment node
 */

import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

describe('Contact API Route', () => {
  const createRequest = (body: Record<string, unknown>) => {
    return new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  it('should return 400 if name is missing', async () => {
    const request = createRequest({
      email: 'test@example.com',
      phone: '0812345678',
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe('Missing required fields');
  });

  it('should return 400 if email is missing', async () => {
    const request = createRequest({
      name: 'Test User',
      phone: '0812345678',
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('should return 400 if phone is missing', async () => {
    const request = createRequest({
      name: 'Test User',
      email: 'test@example.com',
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('should return 400 for invalid email format', async () => {
    const request = createRequest({
      name: 'Test User',
      email: 'invalid-email',
      phone: '0812345678',
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe('Invalid email format');
  });

  it('should return 200 for valid submission', async () => {
    const request = createRequest({
      name: 'Test User',
      email: 'test@example.com',
      phone: '0812345678',
      checkIn: '2024-12-25',
      guests: '2',
      message: 'Test message',
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.message).toBe('Inquiry sent successfully');
  });

  it('should accept submission without optional fields', async () => {
    const request = createRequest({
      name: 'Test User',
      email: 'test@example.com',
      phone: '0812345678',
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
  });
});
