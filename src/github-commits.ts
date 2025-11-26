import { Octokit } from "octokit";
const GitHubPAT: string = import.meta.env.GitHubPAT;
let displayCommits:
  | Array<{ auteur: string; datum: string; bericht: string; html_url: string }>
  | undefined;

if (GitHubPAT === undefined || GitHubPAT === null) {
  console.log(
    "Laatste wijzigingen kunnen niet getoond worden. GitHub Personal Autorisation Token niet gevonden in enviroment variables. Maak er hier een aan: https://github.com/settings/tokens/new?scopes=repo"
  );
} else {
  const octokit = new Octokit({ auth: GitHubPAT });
  let commits = await octokit.request(
    "GET /repos/geensnor/DeDigitaleTuin/commits",
    {
      owner: "geensnor",
      repo: "DeDigitaleTuin",
      path: "/src/content",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  //nieuwste commit eerst
  commits.data.sort((a: any, b: any) => {
    let dateA = new Date(a.commit.author.date);
    let dateB = new Date(b.commit.author.date);

    return dateB.getTime() - dateA.getTime();
  });

  displayCommits = commits.data
    .filter((commit: any) => commit.commit.message !== "Prettified Code!")
    .map((commit: any) => {
      let date = new Date(commit.commit.author.date);
      let day = String(date.getDate()).padStart(2, "0");
      let month = String(date.getMonth() + 1).padStart(2, "0");
      let year = date.getFullYear();

      return {
        auteur: commit.commit.author.name,
        datum: date,
        datumFormatted: `${day}-${month}-${year}`,
        bericht: commit.commit.message,
        html_url: commit.html_url,
      };
    });
}
export { displayCommits, GitHubPAT };
