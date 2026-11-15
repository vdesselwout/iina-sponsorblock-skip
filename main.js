// Slaat SponsorBlock-hoofdstukken (gemarkeerd door yt-dlp) automatisch over
const { mpv, event, core } = iina;

// Welke categorieën overslaan. Laat weg wat je wél wil zien (bv. "Intro").
const SKIP = ["Sponsor", "Unpaid/Self Promotion", "Interaction Reminder",
              "Intermission/Intro Animation", "Endcards/Credits"];

event.on("mpv.chapter.changed", () => {
  const i = mpv.getNumber("chapter");
  const list = mpv.getNative("chapter-list") || [];
  const ch = list[i];
  if (!ch || !ch.title.startsWith("[SponsorBlock]")) return;
  if (!SKIP.some(c => ch.title.includes(c))) return;

  const next = list[i + 1];
  mpv.set("time-pos", next ? next.time : mpv.getNumber("duration"));
  core.osd("Overgeslagen: " + ch.title.replace("[SponsorBlock]: ", ""));
});
