export function reducePreviewText(text: string, maxLenght: number) {
  // adicionar logica para tamanhos diferentes de tela
  if (text.length <= maxLenght) {
    return text
  } else {
    return text.slice(0, maxLenght).trim() + '...'
  }
}
