---
title: Two Minute Week
---

# #two-minute-week

In this special channel of our [Slack community](/community), folks share a 2-minute (max) video once a week explaining the most recent progress on their projects.

You should do it too!

You can post at any time, just limit yourself to one post a week. The video doesn't need to show a working demo. You could instead show a static mockup, or a whiteboard sketch, or just webcam your face. You can use these videos to give the audience some context for your work, but that's not strictly necessary. The point is to force yourself to externalize and articulate where you're at in your thinking / working, concentrated down into a 2-minute recap.

If you want to make a longer video, to give more context for your project or go into greater depth, share it in #feedback or #general instead of this channel.


### Recording Tips

Here are some tips that'll help you make a compelling two minute demo.

**Length:** Use a stopwatch (or a stopwatch app) to time yourself while you record.

**Delivery:** Rehearse your demo. Record every rehearsal as though it were the real thing. It's a two minute video, so you can do 5 rehearsals in roughly 10 minutes. By that 5th one, your delivery will be smooth, exciting, and not need much if any editing.

**Sound:** Unless you're in a sound-treated room, a bad microphone up close to your mouth will often make speech easier to understand than a not-bad mic at a distance, so it's worth trying whatever external mics you can scrounge up — an old set of earbuds, a webcam — to see if the sound is better than your laptop mic. Put your external mic as close to your mouth as possible, ideally about 2" to 4" away. If the mic doesn't have any wind protection (eg: your breathing sounds loud), you can put it off to the side of your mouth so that it's out of the direct path of air from your mouth and nose.

**Volume:** Please turn your mic level up as high as possible, just below the point where it starts sounding crunchy or distorted ("clipping").

**Screen Recording (Mac):** If you're on a recent Mac OS, you can press Command-Shift-5 to bring up a screen recording overlay. Choose the "Record Selected Portion" mode, select the region of the screen you want to capture, pick your mic input from the Options menu, and hit Record. When done, click the stop button in the menu bar. Open your recording in QuickTime, and press ⌘T to trim the start and end.

**Screen Recording (Windows, Linux, older Mac):** You can to use [OBS](https://obsproject.com) to record your videos. It's a powerful but complicated tool. Explaining how to set it up would be a little much for this page. If anyone finds a good tutorial, let me know and I'll link to it here.

**Publishing:** When your video is ready, you can either upload it to YouTube or Vimeo or your host of choice and share the link...

**Uploading To Slack:** ...or you can post it directly to Slack, in which case you must manually compress your video, since we have some members (like me) who have snail-powered internet. Whether you use OBS, [HandBrake](https://handbrake.fr), or ffmpeg, here are the settings I recommend as a starting point:

* Format: `MP4`
* Encoder: `H.264`
* FPS: `Same as Source` (or `60` or `30`)
* Quality: either `Constant Quality, RF 20` or `Bit rate: 3000 kbps`
* Audio: Mono, `AAC`, `80 kbps`
* **40mb** is the largest one of these videos should be.

Reminder that these videos, like everything shared to the Slack, are public and will likely end up in the [newsletter](https://tinyletter.com/marianoguerra/archive).
