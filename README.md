# Pettoprint — Base44 Video Engine

This repository is being prepared as the video-engine layer for the Base44 app.

## Integrated open-source editor

FreeCut is pinned as the browser video-editor dependency in `.gitmodules`.

- Source: https://github.com/walterlow/freecut
- Pinned revision: `4d62e8082c5eb387a96275bcbd323d28f6e41a62`
- License: MIT

FreeCut provides browser-side multi-track editing, effects, captions, audio, WebCodecs export and WebGPU acceleration.

## Important

FreeCut is a client-side application rather than a REST video-processing API. The Base44 application should use it as the editor UI/processing layer in a modern Chromium browser. Server-side processing such as long-running FFmpeg/auto-editor jobs should be added separately rather than pretending FreeCut exposes a server API.
