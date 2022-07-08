export function alphabeticalSort(a, b) {
  let fa = a.value,
    fb = b.value;
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
}
