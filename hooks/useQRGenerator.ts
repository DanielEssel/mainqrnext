'use client';

import { useState, useCallback } from 'react';
import QRCode from 'qrcode';
import type { QRFormData } from '@/lib/types';

export function useQRGenerator() {
  const [qrSrc, setQrSrc] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQR = useCallback(async (category: string, formData: QRFormData) => {
    setIsGenerating(true);
    try {
      const data = JSON.stringify({ category, ...formData });
      const url = await QRCode.toDataURL(data, {
        width: 256,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrSrc(url);
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const downloadQR = useCallback((filename: string = 'qr-code') => {
    if (!qrSrc) return;
    
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = qrSrc;
    link.click();
  }, [qrSrc]);

  return {
    qrSrc,
    isGenerating,
    generateQR,
    downloadQR
  };
}