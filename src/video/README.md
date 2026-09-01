# Video engine integration

This folder is the adapter boundary for the browser video engine.

- FreeCut source is kept at `vendor/freecut` as a Git submodule.
- The editor UI can be integrated here without coupling Base44 data models to the engine internals.
- Long-running FFmpeg/auto-editor processing should be implemented as asynchronous backend jobs.
