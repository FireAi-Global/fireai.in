'use server';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { TransportOptions } from 'nodemailer';

// Types
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  recaptchaToken: string;
}

interface FormDataWithoutToken {
  name: string;
  email: string;
  phone: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
  errors?: Record<string, string>;
  data?: Omit<ContactFormData, 'recaptchaToken'>;
}

// Constants
const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  minNameLength: 2
};

// Email Configuration
const emailConfig = {
  transporter: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    dkim: {
      domainName: 'fireai.in',
      keySelector: 'default',
      privateKey: process.env.DKIM_PRIVATE_KEY,
    },
  } as TransportOptions),
  
  headers: {
    'List-Unsubscribe': '<mailto:unsubscribe@fireai.in>',
    'Precedence': 'bulk',
    'X-Auto-Response-Suppress': 'OOF, AutoReply',
    'X-Report-Abuse': 'Please report abuse here: https://fireai.in/report-abuse',
    'X-Mailer': 'Fire AI Mailer'
  }
};

// Helper Functions
const createEmailTemplate = (name: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for your interest in FireAI!</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden;">
        <!-- Header with Logo -->
        <div style="background-image: url('https://ik.imagekit.io/fireaiglobal/FireAI.in/emailBanner.png'); background-size: cover; background-position: center; background-repeat: no-repeat; height: 200px; width: 100%;"></div>

        <!-- Content -->
        <div style="padding: 30px;">
          <h1 style="color: #333; font-size: 24px; margin-bottom: 20px;">Thank you for your interest in FireAI!</h1>
          
          <p style="color: #333; font-size: 16px; margin-bottom: 15px;">Hi ${name},</p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We have received your input from our website, and our sales team has been notified. Someone from our team will reach out to you shortly.
          </p>
          
          <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
            If this was not initiated by you, please ignore, but take out some time to view fireai.in, we might interest you
          </p>
          
          <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
            Need help? Contact our support team at <a href="mailto:support@fireai.com" style="color: #0d47a1; text-decoration: none;">support@fireai.com</a>
          </p>

          <!-- Social Links -->
          <div style="margin: 30px 0; border-top: 1px solid #eee; padding-top: 20px;">
            <a href="https://instagram.com/fireaiglobal" style="margin-right: 15px;">
              <img src="https://ik.imagekit.io/fireaiglobal/FireAI.in/instagram.png" alt="Instagram" style="width: 24px; height: 24px;">
            </a>
            <a href="https://linkedin.com/company/fireaiglobal">
              <img src="https://ik.imagekit.io/fireaiglobal/FireAI.in/linkedin.png" alt="LinkedIn" style="width: 24px; height: 24px;">
            </a>
          </div>

          <!-- Footer -->
          <div style="color: #666; font-size: 12px; margin-top: 30px; text-align: left;">
            <p style="margin: 5px 0;">Copywrite © 2025 FireAI. All rights reserved.</p>
            <p style="margin: 5px 0;">Tech Park, BKC, Mumbai, Maharashtra, 400051, India</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

const validateFormData = (data: FormDataWithoutToken): Record<string, string> => {
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

const sendAcknowledgmentEmail = async (data: FormDataWithoutToken) => {
  try {
    await emailConfig.transporter.sendMail({
      from: {
        name: 'Fire AI',
        address: 'sales@fireai.in'
      },
      to: data.email,
      bcc: ['sales@fireai.in', 'vipul@fireai.in'],
      subject: 'Thank you for your interest in FireAI!',
      html: createEmailTemplate(data.name),
      headers: emailConfig.headers,
      messageId: `<${Date.now()}.${Math.random().toString(36).substring(2)}@fireai.in>`,
      priority: 'normal'
    });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

const verifyRecaptcha = async (token: string): Promise<boolean> => {
  try {
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      throw new Error('reCAPTCHA configuration error');
    }

    const params = new URLSearchParams({
      secret: recaptchaSecret,
      response: token
    });

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
};

// Main API Handler
export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  try {
    // Parse and validate request body
    const body: ContactFormData = await request.json();
    const { name, email, phone, recaptchaToken } = body;

    if (!recaptchaToken) {
      return NextResponse.json({
        success: false,
        message: 'reCAPTCHA verification is required',
        error: 'recaptcha_failed'
      }, { status: 400 });
    }

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json({
        success: false,
        message: 'Security check failed. Please try again.',
        error: 'recaptcha_failed'
      }, { status: 400 });
    }

    // Validate form data
    const validationErrors = validateFormData({ name, email, phone });
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      }, { status: 400 });
    }

    // Send acknowledgment email
    const emailSent = await sendAcknowledgmentEmail({ name, email, phone });
    if (!emailSent) {
      return NextResponse.json({
        success: false,
        message: 'Failed to send confirmation email',
        error: 'email_delivery_failed'
      }, { status: 500 });
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      data: { name, email, phone }
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to process form submission',
      error: 'server_error'
    }, { status: 500 });
  }
} 