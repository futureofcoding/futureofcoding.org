---
title: Two Minute Week
---

# #two-minute-week

In this special channel of our [Slack community](/community), folks share a 2-minute (max) video once a week explaining the most recent progress on their projects.

You should do it, too!

You can post at any day/time, just limit yourself to one post a week. The video doesn't need to show a working demo. You could instead show a static mockup, or a whiteboard sketch, or just webcam your face. You can use these videos to give the audience some context for your work, but that's not strictly necessary. The point is to force yourself to externalize and articulate where you're at in your thinking / working, concentrated down into a 2-minute recap.

### Recording Tips

Use a stopwatch (or a stopwatch app) to time yourself while you record.

If you're on a recent Mac OS, you can press Command-Shift-5 to bring up a screen recording overlay. Choose the "Record Selected Portion" mode, select the region of the screen you want to capture, pick your mic input from the Options menu, and hit Record. When done, click the stop button in the menu bar. Open your recording in QuickTime, and press ⌘T to trim the start and end.

If you use Linux or Windows, you can to use [OBS](https://obsproject.com) to record your videos.

When your video is ready, you can either upload it to YouTube or Vimeo or your host of choice and share the link, or just upload the video directly to Slack. If you're going to upload to Slack you must manually compress your video, since we have some members (like me) who have snail-powered internet. Whether you use OBS, [HandBrake](https://handbrake.fr), or ffmpeg, here are the settings I recommend as a starting point:

* Format: `MP4`
* Encoder: `H.264`
* FPS: `Same as Source` (or `60` or `30`)
* Quality: either `Constant Quality, RF 20` or `Bit rate: 1500 kbps`
* Audio: Mono, `AAC`, `160 kbps`

**40mb** is the largest one of these videos should be.

Reminder that these videos, like everything shared to the Slack, are public and will likely end up in the [newsletter](https://tinyletter.com/marianoguerra/archive).
