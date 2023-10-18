import distance from "euclidean-distance";

export default function getTop10(data, rate, weight) {
  var top10 = data
    .filter((entry) => entry.ttp != null)
    .sort(function (a, b) {
      return distance([rate, weight], [a.rate, a.weight]) >
        distance([rate, weight], [b.rate, b.weight])
        ? 1
        : -1;
    })
    .slice(0, 10)
    .map((item) => ({
      ...item,
      distance: Math.floor(distance([rate, weight], [item.rate, item.weight])),
    }));
  return top10;
}
