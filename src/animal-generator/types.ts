export type AnimalStyle =
  | 'photorealistic'
  | 'cartoon'
  | '3d'
  | 'watercolor'
  | 'sticker'
  | 'illustration'
  | 'merchandise';

export type GenerationStatus = 'queued' | 'processing' | 'completed' | 'failed';

export interface AnimalImageRequest {
  animal: string;
  prompt: string;
  style: AnimalStyle;
  aspectRatio: '1:1' | '4:5' | '9:16' | '16:9';
  count: number;
  negativePrompt?: string;
}

export interface AnimalImageJob {
  id: string;
  status: GenerationStatus;
  request: AnimalImageRequest;
  imageUrls: string[];
  error?: string;
  createdAt: string;
}
