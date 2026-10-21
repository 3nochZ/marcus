# Architecture

- Render the Marcus homepage at `/` through `MarcusHomePage`; permanently redirect `/marcus` to `/` while preserving `/marcus/*` pages so existing public links continue working.
- Keep the content route tree Marcus-only; unrelated atelier and avatar demos are removed so they cannot be served or bundled as pages.
