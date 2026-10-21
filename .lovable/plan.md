## Hero video with ping-pong loop

**File**: `src/components/marcus/Hero.tsx`

### Steps

1. Upload the uploaded MP4 to Lovable Assets:
   - `lovable-assets create --file /mnt/user-uploads/Screencast_from_2026-07-07_11-27-23.mp4 --filename marcus-hero.mp4 > src/assets/marcus/hero.mp4.asset.json`

2. In `Hero.tsx`:
   - Remove the `heroImg` PNG import and the `<img>` tag.
   - Import the new `hero.mp4.asset.json` pointer.
   - Render a `<video>` filling the hero: `absolute inset-0 h-full w-full object-cover`, `autoPlay muted playsInline`, no `loop` attribute, `preload="auto"`, `aria-hidden`.
   - Ping-pong playback via a ref + `onEnded` / `timeupdate`:
     - On `ended` (forward pass done): set `playbackRate = -1` and call `play()` — most browsers ignore negative rates, so fall back to a manual reverse:
       - Use `requestAnimationFrame` loop when reversing: decrement `video.currentTime` by `dt * speed` each frame; when it hits `0`, cancel the RAF, set `playbackRate = 1`, and `play()` forward again.
     - Track direction in a ref (`"fwd" | "rev"`).
   - Keep the existing gradient overlay and content on top (`z-10`).
   - Respect `prefers-reduced-motion`: if reduced, just show the first frame (`paused`, no RAF).

3. Keep the old PNG asset pointer file in place (unused) — do not delete unless asked.

### Technical notes

- Native `<video>` looping can't play in reverse; the RAF approach steps `currentTime` backwards each frame at ~1× real-time to produce the "rewind" effect the user described as "glitch visibly to start."
- Video is muted so autoplay works in all browsers.
- `object-cover` + `min-h-screen` on the section keeps it full-screen across viewports.

No other files change.
