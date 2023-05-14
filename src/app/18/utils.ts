export function formatArray(arr: string[], msg: string) {
  if (arr.length === 0) {
    return msg;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const elements = arr.slice(0, -1).join(', ');
  const lastEl = arr[arr.length - 1];
  return elements + ' & ' + lastEl;
}
