Put the hero video here as hero.mp4 (and optionally hero.webm).
Keep it 5-15 seconds, seamless loop, no audio, 1280x720, under 3 MB.
Compress with:
ffmpeg -i input.mp4 -an -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -movflags +faststart hero.mp4
