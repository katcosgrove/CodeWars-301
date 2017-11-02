function formatWords (words) {
  if (!words || words.length < 1) {
    return '';
  }

  words = words.filter (function (spaces) {
    return spaces !== '';
  });

  if (words.length === 1) {
    return words.join('');
  }

  if (words.length < 1) {
    return '';
  }

  return words.slice (0, words.length - 1).join(', ') + ' and ' + words.pop();
}
