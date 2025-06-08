// Common types used across the application

export interface QRCategory {
  id: string;
  name: string;
  icon: React.ReactElement;
}

export interface QRFormData {
  url?: string;
  email?: string;
  phone?: string;
  message?: string;
  [key: string]: any;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface QRCode {
  id: string;
  name: string;
  type: 'static' | 'dynamic';
  folder?: string;
  created: string;
  scans: number;
  lastScan?: string;
  status: 'active' | 'inactive';
  data: QRFormData;
}

export interface Folder {
  id: string;
  name: string;
  qrCodes: QRCode[];
  created: string;
}