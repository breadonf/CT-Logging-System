const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

const setData = async (
  mutation,
  { data, updateCtItemId },
  update = false,
  condition = 0
) => {
  if (condition == 0) {
    var query = JSON.stringify({
      query: mutation,
      variables: update
        ? { data: data, updateCtItemId: updateCtItemId }
        : { data: data },
    });
  }
  if (condition == 1) {
    var query = JSON.stringify({
      query: mutation,
      variables: update
        ? { data: data, updateCardiacCtItemId: updateCtItemId }
        : { data: data },
    });
  }
  if (condition == 2) {
    var query = JSON.stringify({
      query: mutation,
      variables: update
        ? { data: data, updateCardiacCtRecordItemId: updateCtItemId }
        : { data: data },
    });
  }
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(graphQLAPI, {
    method: "POST",
    headers,
    body: query,
  });

  const result = await res.json();

  if (result.errors) {
    console.log(result.errors);
    throw new Error(result.errors);
  }
  return result;
};

export default setData;
