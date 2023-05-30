function translateToLibras() {
  const textInput = document.getElementById('text-input').value;
  const translatedText = vLibras.translate(textInput);
  document.getElementById('translated-text').innerHTML = translatedText;
}
