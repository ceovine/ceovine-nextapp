export function highlightText(text: string, query: string) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'ig');
  return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
}
