
# Unmastered — Firebase Music App (multi-file)

This repository contains a simple multi-page music sharing app that uses Firebase Authentication, Firestore, and Firebase Storage.

Files:
- index.html — Login / Signup
- feed.html — Public feed with likes & comments
- upload.html — Upload music to Firebase Storage
- playlists.html — Playlists management
- profile.html — User profile + own uploads
- artist.html — Public artist page + follow/unfollow
- style.css — Shared modern styles
- firebase-init.js — Loads config.json and initializes Firebase (dynamically loads Firebase SDKs)
- config.json — Put your Firebase config here (see below)

## Setup
1. Create a Firebase project and enable Authentication (Email/Password), Firestore, and Storage.
2. Replace the values in `config.json` with your Firebase project's config.
3. Deploy the files to GitHub Pages, Firebase Hosting, or serve from any static host.

## Notes
- The app uses Firestore collections:
  - `songs` — song metadata `{ ownerUid, ownerEmail, artist, title, url, storagePath, createdAt, likes: [] }`
  - `playlists` — user playlists
  - `following` — docs with id `${uid}_${artist}` for follows
  - `comments` stored under `songs/{songId}/comments`
- This is a scaffold — for production use add security rules, file size limits, input validation, and rate limits.
