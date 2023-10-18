const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;
const graphQLSystemAPI = process.env.NEXT_PUBLIC_GRAPHQL_SYSTEM;

const fetchData = async (query, { variables = {} }, system = false) => {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(system ? graphQLSystemAPI : graphQLAPI, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
  }
  return json;
};

export default fetchData;
