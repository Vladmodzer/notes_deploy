export default function MakeShortText(text, maxLength) {
  const truncatedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return truncatedText;
}
