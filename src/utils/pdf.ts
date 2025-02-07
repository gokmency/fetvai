import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import type { FetvaResponse } from '../types';

export async function generatePDF(response: FetvaResponse, responseElement: HTMLElement): Promise<void> {
  try {
    const canvas = await html2canvas(responseElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Add metadata
    pdf.setProperties({
      title: 'Fetva.ai Cevabı',
      subject: response.guidance.substring(0, 100),
      creator: 'Fetva.ai',
      author: 'Fetva.ai'
    });

    pdf.save('fetva-cevap.pdf');
  } catch (error) {
    console.error('PDF oluşturulurken hata:', error);
    throw new Error('PDF oluşturulamadı. Lütfen tekrar deneyiniz.');
  }
}