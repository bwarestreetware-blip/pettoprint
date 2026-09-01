# Animal Image Generator

Provider-neutral image generation module for Pettoprint.

## Flow

Base44 UI -> async image-generation endpoint -> image provider (for example ComfyUI/FLUX or another self-hosted provider) -> storage -> AnimalImageJob -> gallery -> video editor.

Provider credentials must stay server-side. The frontend only calls the Base44/backend endpoint exposed through `VITE_ANIMAL_IMAGE_API_URL`.

The module supports four generated variants, styles, aspect ratios, job states, and later insertion into the video editor.
