import type { AnimalImageJob, AnimalImageRequest } from './types';

/**
 * Provider-neutral adapter. Base44 should supply the backend endpoint through
 * VITE_ANIMAL_IMAGE_API_URL. The browser never receives provider API keys.
 */
export async function createAnimalImageJob(
  request: AnimalImageRequest,
): Promise<AnimalImageJob> {
  const endpoint = import.meta.env.VITE_ANIMAL_IMAGE_API_URL;
  if (!endpoint) {
    throw new Error('Animal image API is not configured. Set VITE_ANIMAL_IMAGE_API_URL.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Image generation request failed (${response.status}).`);
  }

  return response.json() as Promise<AnimalImageJob>;
}

export async function getAnimalImageJob(jobId: string): Promise<AnimalImageJob> {
  const endpoint = import.meta.env.VITE_ANIMAL_IMAGE_API_URL;
  if (!endpoint) throw new Error('Animal image API is not configured.');

  const response = await fetch(`${endpoint}/${encodeURIComponent(jobId)}`);
  if (!response.ok) throw new Error(`Unable to read image job (${response.status}).`);
  return response.json() as Promise<AnimalImageJob>;
}
