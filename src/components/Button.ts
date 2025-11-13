export function createButton(
  text: string,
  onClick: () => void
): HTMLButtonElement {
  const button = document.createElement("button");
  button.textContent = text;
  button.className =
    "px-6 py3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors";
  button.addEventListener("click", onClick);
  return button;
}
