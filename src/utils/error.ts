export class FetvaError extends Error {
  constructor(message: string, public readonly originalError?: unknown) {
    super(message);
    this.name = 'FetvaError';
  }
}

export function handleFetvaError(error: unknown): string {
  console.error('Fetva API Error:', error);
  
  if (error instanceof FetvaError) {
    return error.message;
  }

  if (error instanceof Error) {
    if (error.message.includes('VITE_GEMINI_API_KEY')) {
      return 'Sistem yapılandırması eksik. Lütfen yönetici ile iletişime geçin.';
    }
    
    if (error.message.includes('network') || error.message.includes('timeout')) {
      return 'İnternet bağlantınızı kontrol edip tekrar deneyiniz. Her zorlukta bir kolaylık vardır.';
    }

    if (error.message.includes('format')) {
      return 'Yanıt formatında bir sorun oluştu. Lütfen sorunuzu daha açık bir şekilde tekrar sorunuz.';
    }
  }

  return "Üzgünüm, şu anda cevap veremiyorum. Allah'ın izniyle daha sonra tekrar deneyebilirsiniz. Her zorlukta bir kolaylık vardır.";
}