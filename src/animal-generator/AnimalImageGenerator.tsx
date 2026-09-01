import { useState } from 'react';
import { createAnimalImageJob } from './animalImageApi';
import type { AnimalImageJob, AnimalImageRequest, AnimalStyle } from './types';

const styles: AnimalStyle[] = [
  'photorealistic', 'cartoon', '3d', 'watercolor', 'sticker', 'illustration', 'merchandise',
];

export function AnimalImageGenerator() {
  const [animal, setAnimal] = useState('');
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState<AnimalStyle>('photorealistic');
  const [aspectRatio, setAspectRatio] = useState<AnimalImageRequest['aspectRatio']>('1:1');
  const [job, setJob] = useState<AnimalImageJob | null>(null);
  const [error, setError] = useState('');

  async function generate() {
    setError('');
    setJob(null);
    try {
      const result = await createAnimalImageJob({
        animal,
        prompt,
        style,
        aspectRatio,
        count: 4,
      });
      setJob(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed.');
    }
  }

  return (
    <section className="animal-generator">
      <h2>Animal Image Generator</h2>
      <input value={animal} onChange={(e) => setAnimal(e.target.value)} placeholder="Animal, e.g. golden retriever" />
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Describe the image..." />
      <select value={style} onChange={(e) => setStyle(e.target.value as AnimalStyle)}>
        {styles.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <select value={aspectRatio} onChange={(e) => setAspectRatio(e.target.value as AnimalImageRequest['aspectRatio'])}>
        <option value="1:1">1:1</option><option value="4:5">4:5</option>
        <option value="9:16">9:16</option><option value="16:9">16:9</option>
      </select>
      <button onClick={generate} disabled={!animal || !prompt}>Generate 4 images</button>
      {job && <p>Status: {job.status}</p>}
      {error && <p role="alert">{error}</p>}
      <div className="generated-grid">
        {job?.imageUrls.map((url) => <img key={url} src={url} alt="Generated animal" />)}
      </div>
    </section>
  );
}
