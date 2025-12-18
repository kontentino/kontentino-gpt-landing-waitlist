# Showcase Videos Setup
## For OpenAI ChatGPT Apps Directory Submission

**URL**: https://kontentino.com/chatgpt/showcase

---

## Required Video Files

Place the following files in `/public/chatgpt/showcase/`:

### 1. Desktop Demo
- **File**: `desktop-demo.mp4`
- **Poster**: `desktop-poster.jpg` (optional but recommended)
- **Aspect Ratio**: 16:9 (landscape)
- **Resolution**: 1920x1080 recommended
- **Duration**: 2-3 minutes
- **Content**: Show full workflow on web ChatGPT

**What to record**:
- Calendar creation from natural language request
- Multi-platform preview examples
- Drag-and-drop rescheduling
- Export to CSV/PDF/PNG

---

### 2. iOS Demo
- **File**: `ios-demo.mp4`
- **Poster**: `ios-poster.jpg` (optional)
- **Aspect Ratio**: 9:16 (portrait) or 16:9 (landscape)
- **Resolution**: 1080x1920 (portrait) or 1920x1080 (landscape)
- **Duration**: 1-2 minutes
- **Content**: Show mobile ChatGPT iOS app

**What to record**:
- Touch interactions on iPhone
- Calendar view on mobile
- Preview modal on mobile
- Swipe/tap gestures

---

### 3. Android Demo
- **File**: `android-demo.mp4`
- **Poster**: `android-poster.jpg` (optional)
- **Aspect Ratio**: 9:16 (portrait) or 16:9 (landscape)
- **Resolution**: 1080x1920 (portrait) or 1920x1080 (landscape)
- **Duration**: 1-2 minutes
- **Content**: Show mobile ChatGPT Android app

**What to record**:
- Touch interactions on Android device
- Calendar view on mobile
- Preview functionality
- Android-specific UI patterns

---

## Quick Setup (If You Don't Have All Videos Yet)

### Option 1: Use Same Video for All Platforms
If you only have a desktop recording:
```bash
# In /public/chatgpt/showcase/
cp desktop-demo.mp4 ios-demo.mp4
cp desktop-demo.mp4 android-demo.mp4
```

### Option 2: Create Placeholder Posters
If videos aren't ready:
```bash
# Create simple poster images (1920x1080)
# Just screenshots of the calendar widget with text overlay:
# "Desktop Demo - Coming Soon"
# "iOS Demo - Coming Soon"
# "Android Demo - Coming Soon"
```

---

## Video Specifications

### File Format
- **Container**: MP4
- **Video Codec**: H.264
- **Audio Codec**: AAC (optional - videos can be silent)
- **Max File Size**: 50MB per video recommended

### Encoding Settings
```bash
# Using ffmpeg to optimize:
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium \
  -vf scale=1920:1080 -c:a aac -b:a 128k desktop-demo.mp4
```

### Quality Guidelines
- Clear screen recording (no blur)
- Smooth cursor movements
- No distracting background noise
- Good lighting if showing mobile device

---

## Poster Images (Optional)

Poster images show before video plays. Create at same resolution as video.

**Quick method**:
1. Play video to interesting frame (e.g., calendar view)
2. Take screenshot
3. Save as JPG: `desktop-poster.jpg`

---

## Current Status

- [ ] Desktop demo video uploaded
- [ ] Desktop poster image created
- [ ] iOS demo video uploaded
- [ ] iOS poster image created
- [ ] Android demo video uploaded
- [ ] Android poster image created
- [ ] Page tested locally
- [ ] Page deployed to kontentino.com

---

## Testing Locally

```bash
# In kontentino-gpt-landing-waitlist directory
pnpm run dev

# Visit:
# http://localhost:3000/chatgpt/showcase
```

---

## Deployment

Once videos are ready:

1. **Upload videos to `/public/chatgpt/showcase/`**
2. **Commit and push**:
   ```bash
   git add public/chatgpt/showcase/
   git add app/chatgpt/showcase/
   git commit -m "Add showcase page with demo videos"
   git push
   ```

3. **Deploy to production** (Railway/Vercel/etc.)

4. **Verify URL**: https://kontentino.com/chatgpt/showcase

5. **Use in submission form**:
   ```
   Demo Recording URL: https://kontentino.com/chatgpt/showcase
   ```

---

## Alternative: Single Comprehensive Video

If you prefer one video instead of three separate ones, you can:

1. Record one comprehensive demo (3-5 minutes)
2. Upload as `desktop-demo.mp4`
3. Use same file for all three platforms
4. Update page to show "Comprehensive Demo" instead of platform-specific sections

---

## For Reviewers

This page is designed for **OpenAI app reviewers** to see platform-specific demos.
It's marked `noindex, nofollow` so it won't appear in search engines.

---

## Notes

- Videos should demonstrate **Phase 1 features only**:
  - ✅ Post preview (9 platforms)
  - ✅ Content calendar
  - ✅ Export functionality
  - ❌ No scheduling/publishing (not in Phase 1)

- Keep it simple - this is for reviewers, not marketing
- Focus on functionality, not polish
- Show real usage, not scripted perfection

---

**Created**: 2025-12-18
**For**: OpenAI ChatGPT Apps Directory Submission
