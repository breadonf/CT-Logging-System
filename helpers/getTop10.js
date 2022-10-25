import distance from "euclidean-distance";

function getTop10(data, rate, weight) {
  console.log(data.filter((entry) => entry.ttp != null));
  var top10 = data
    .filter((entry) => entry.ttp != null)
    .sort(function (a, b) {
      return distance([rate, weight], [a.rate, a.weight]) >
        distance([rate, weight], [b.rate, b.weight])
        ? 1
        : -1;
    })
    .slice(0, 10);
  console.log("getTop10:" + Object.keys(top10).length);
  return top10;
}
