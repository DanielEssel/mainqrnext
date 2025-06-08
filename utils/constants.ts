// Application constants

export const QR_CATEGORIES = [
  { id: 'link', name: 'Website URL', description: 'Link to any website' },
  { id: 'email', name: 'Email', description: 'Send an email' },
  { id: 'phone', name: 'Phone', description: 'Make a phone call' },
  { id: 'sms', name: 'SMS', description: 'Send a text message' },
  { id: 'wifi', name: 'WiFi', description: 'Connect to WiFi' },
  { id: 'vcard', name: 'Contact', description: 'Share contact information' },
  { id: 'location', name: 'Location', description: 'Share a location' },
  { id: 'event', name: 'Event', description: 'Add to calendar' },
] as const;

export const QR_FORMATS = ['PNG', 'SVG', 'PDF'] as const;

export const QR_SIZES = [
  { label: 'Small (256x256)', value: 256 },
  { label: 'Medium (512x512)', value: 512 },
  { label: 'Large (1024x1024)', value: 1024 },
] as const;

export const DASHBOARD_ROUTES = {
  MY_QRS: 'my-qrs',
  ANALYTICS: 'analytics',
  BULK: 'bulk',
  API: 'api',
  TEAM: 'team',
  SETTINGS: 'settings',
  SUPPORT: 'support',
} as const;