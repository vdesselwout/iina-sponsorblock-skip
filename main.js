// Automatically skips SponsorBlock chapters (marked by yt-dlp)
const { mpv, event, core } = iina;

// Categories to skip. Remove the ones you do want to watch (e.g. "Intermission/Intro Animation").
const SKIP = ["Sponsor", "Unpaid/Self Promotion", "Interaction Reminder",
              "Intermission/Intro Animation", "Endcards/Credits"];

event.on("mpv.chapter.changed", () => {
  const i = mpv.getNumber("chapter");
  const list = mpv.getNative("chapter-list") || [];
  const ch = list[i];
  if (!ch || !ch.title || !ch.title.startsWith("[SponsorBlock]")) return;
  if (!SKIP.some(c => ch.title.includes(c))) return;

  // Don't use mpv.set("time-pos"): IINA refuses that without the file-system permission.
  const next = list[i + 1];
  core.seekTo(next ? next.time : mpv.getNumber("duration"));
  core.osd("Skipped: " + ch.title.replace("[SponsorBlock]: ", ""));
});
