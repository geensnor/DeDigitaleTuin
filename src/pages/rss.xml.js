import { displayCommits } from "../github-commits";
import rss from "@astrojs/rss";

export function GET(context) {
  return rss({
    title: "De Digitale Tuin",
    description: "Een bonte verzameling van allerlei aardigheden",
    site: context.site,
    items: displayCommits.map((commit) => ({
      title: commit.bericht,
      description: `De Digitale Tuin is aangepast door ${commit.auteur}: ${commit.bericht}.`,
      link: commit.html_url,
      pubDate: commit.datum,
    })),
    customData: `<language>nl-nl</language>`,
  });
}
