const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

const setData = async (mutation, data = {}) => {
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
  console.log("data", data);
  if (json.errors) {
    console.log(json.errors);
  }

  return json;
};

export default setData;
