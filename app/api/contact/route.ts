'use server';

import { NextResponse } from 'next/server';

// Types
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
  errors?: Record<string, string>;
  data?: ContactFormData;
}

// Constants
const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  minNameLength: 2
};

const validateFormData = (data: ContactFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.name) {
    errors.name = 'Name is required';
  } else if (data.name.length < VALIDATION_RULES.minNameLength) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!VALIDATION_RULES.email.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone) {
    errors.phone = 'Phone number is required';
  } else if (!VALIDATION_RULES.phone.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
};

// Main API Handler
export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  try {
  
    // Parse and validate request body
    const body: ContactFormData = await request.json();
    
    const { name, email, phone } = body;

    // Validate form data
    const validationErrors = validateFormData({ name, email, phone });
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      }, { status: 400 });
    }

    if (!process.env.ENDPOINT) {
      console.error('ENDPOINT environment variable is not set');
      throw new Error('Server configuration error: ENDPOINT not set');
    }

    if (!process.env.PUBLIC_KEY) {
      console.error('PUBLIC_KEY environment variable is not set');
      throw new Error('Server configuration error: PUBLIC_KEY not set');
    }

    const apiUrl = `${process.env.ENDPOINT}/users/v1/lead_user/create_lead_user`;

    
    const requestBody = {
      data: {
        fullName: name,
        email: email,
        mobileNumber: phone,
        source: 'public'
      }
    };

    try {
      // Prepare the API request
      const apiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'publicKey': process.env.PUBLIC_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!apiResponse.ok) {
        const errorText = await apiResponse.text();
        console.error('API Error Response:', errorText);
        return NextResponse.json({
          success: false,
          message: 'Our servers are experiencing issues. Please try again later.',
          error: errorText
        }, { status: apiResponse.status });
      }

      const apiResult = await apiResponse.json();
      console.log(`Mail request successfully submitted for ${email}`);

      // Return success response
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully',
        data: { name, email, phone },
        apiResponse: apiResult
      }, { status: 200 });

    } catch (error) {
      console.error('Error making API request:', error);
      return NextResponse.json({
        success: false,
        message: 'Our servers are experiencing issues. Please try again later or contact us at info@fireai.in ',
        error: error instanceof Error ? error.message : 'server_error'
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process form submission',
      error: error instanceof Error ? error.message : 'server_error'
    }, { status: 500 });
  }
} 