const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

const submitCase = async (mutation, data = {}) => {
  const query = JSON.stringify({
    query: mutation,
    variables: data,
  });

  const headers = { "Content-Type": "application/json" };

  const res = await fetch(graphQLAPI, {
    method: "POST",
    headers,
    body: query,
  });

  const json = await res.json();

  return json.data;
};

export default submitCase;
