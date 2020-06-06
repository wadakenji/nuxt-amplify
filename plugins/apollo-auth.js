export default function (context) {
  //08e327ea24407bdb0925a4585cd6251a058d233d
  const githubAccessToken = process.env.GITHUB_ACCESS_TOKEN

  return {
    httpEndpoint: "https://api.github.com/graphql",
    getAuth: () => `Bearer ${githubAccessToken}`
  }
}
