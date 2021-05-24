export const FormatNumber = (c = 0, n, x) => {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return c.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}