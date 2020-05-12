export default function(context) {
  //08e327ea24407bdb0925a4585cd6251a058d233d
  const accessToken = process.env.accessToken;

  return {
    httpEndpoint: "https://api.github.com/graphql",
    getAuth: () => `Bearer ${accessToken}`
  };
}
