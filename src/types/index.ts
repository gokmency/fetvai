interface Verse {
  arabic: string;
  turkish: string;
  reference: string;
  context: string;
}

interface Hadith {
  arabic: string;
  turkish: string;
  source: string;
  explanation: string;
}

export interface FetvaResponse {
  verses: Verse[];
  hadiths: Hadith[];
  guidance: string;
}