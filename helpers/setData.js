const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

const setData = async (mutation, { data, updateCtItemId }, update = false) => {
  const query = JSON.stringify({
    query: mutation,
    variables: update
      ? { data: data, updateCtItemId: updateCtItemId }
      : { data: data },
  });
  console.log("Query Content", data, updateCtItemId);
  console.log("Query Content", query);
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(graphQLAPI, {
    method: "POST",
    headers,
    body: query,
  });

  const json = await res.json();

  if (json.errors) {
    console.log(json.errors);
  }
  console.log("res", json);
  return json;
};

export default setData;
