const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

const setData = async (mutation, { data, updateCtItemId }, update = false) => {
  const query = JSON.stringify({
    query: mutation,
    variables: update
      ? { data: data, updateCtItemId: updateCtItemId }
      : { data: data },
  });
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(graphQLAPI, {
    method: "POST",
    headers,
    body: query,
  });

  const result = await res.json();

  if (result.errors) {
    throw new Error(json.errors);
  }
  return result;
};

export default setData;
