# iina-sponsorblock-skip

An [IINA](https://iina.io) plugin that automatically skips chapters with `[SponsorBlock]` in their title, as created by [yt-dlp](https://github.com/yt-dlp/yt-dlp) with `--sponsorblock-mark`.

## Usage
Download videos with SponsorBlock chapters marked:

```sh
yt-dlp --sponsorblock-mark all <url>
```

Play the file in IINA; marked segments are skipped and an on-screen message shows which one.

## Installation
Download `sponsorblock-skip.iinaplgz` from the [latest release](https://github.com/vdesselwout/iina-sponsorblock-skip/releases/latest), open it with IINA, and restart IINA.

## Configuration
Edit `SKIP` in `main.js` to choose which categories to skip.

## Building
```sh
mkdir -p build && zip -j build/sponsorblock-skip.iinaplgz Info.json main.js
```
