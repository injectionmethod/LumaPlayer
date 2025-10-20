# LumaPlayer

An alternative media player designed to address issues within Microsoft's codec support and VLC slideshow limitations. LumaPlayer focuses on smooth playback for local and remote media with an intuitive interface and useful enhancements.

---

## Screenshots


<img width="1221" height="905" alt="image" src="https://github.com/user-attachments/assets/a7a621aa-c7cf-4aab-8a2e-511cc0e51f0c" />

---

## Features

- **Universal Media Playback**
  - Plays images, videos, and audio.
  - Local files and remote URLs supported.
  - Handles formats that may fail in default Windows codecs or VLC.

- **Playlist & Session Management**
  - Drag and drop or folder import.
  - Searchable playlist.
  - Save and restore remote sessions (local files cannot be persisted due to browser security).

- **Slideshow Mode**
  - Automated playback of images & videos.
  - Adjustable slideshow speed.
  - Looping support.

- **Visual Enhancements**
  - Cinema mode: dims background for distraction-free viewing.
  - Fullscreen toggle.
  - Picture-in-Picture (PiP) support.
  - Adjustable 'contain' or 'cover' display modes.

- **Audio Visualizer**
  - Real-time frequency bars for audio files.

- **File Metadata & Screenshot**
  - Displays basic file metadata (resolution, type, size, duration).
  - Capture current frame as an image for videos or snapshots of images.

- **User Experience**
  - Light/Dark theme toggle.
  - Customizable accent color.
  - Keyboard shortcuts for playback, volume, fullscreen, and more.

- **Up Next Dock**
  - Quick preview of the next 3 items in the playlist.
  - Click to jump to any upcoming media item.

- **History Tracking**
  - Tracks last 200 played items.
  - Clear or view playback history.

- **Safety & Privacy**
  - Local-only playback by default (except for URL media, which is temporary).
  - No files are uploaded or stored externally.

---

## ⌨️ Keyboard Shortcuts

| Key       | Action                          |
|-----------|--------------------------------|
| `Space`   | Play / Pause                   |
| `← / →`   | Seek backward / forward        |
| `↑ / ↓`   | Volume up / down               |
| `F`       | Toggle fullscreen              |
| `N / P`   | Next / Previous media          |
| `M`       | Mute / Unmute                  |
| `C`       | Cinema mode toggle             |
| `L`       | Light / Dark theme toggle      |

---

## Installation

1. Clone or download this repository.
2. Open `LumaPlayer.html` in your browser (modern browsers recommended: Chrome, Edge, Firefox).
3. Drag and drop files or folders, or add URLs to start playback.
4. (Optional) Create a desktop extension for ease of access

---

## Hosting

- You can either use the server.js from the "Hosting" folder or simply write your own
- Since the frontend doesnt call to a server there is no risk of clients getting playlists combined or jumbled

---

## Contact / Support

If you have questions or want to report a bug, send an email to:  
**injectionmethod@proton.me**
Alternatively you can leave an issue report here

---

## Notes

- LumaPlayer is browser-based, so local files cannot be permanently saved between sessions.
- Remote URLs are stored temporarily for session restoration.
- Version: `v1.a`

---

## To-Do

- Automatic subtitle loading if .srt files are included in directory
- General bug fixes
- Playlist extension filters
- Persistent history loading
- Better integration of adding remote files from url
- Option to try use your ffmpeg install to handle unsupported or missing codecs
- Further file format support
- Better integration of the visualizer

---

