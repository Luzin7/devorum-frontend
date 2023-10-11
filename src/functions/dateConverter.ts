export const dateConverter = (timezone: Date) => {
  const date = new Date(timezone);

  const formattedDate = date.toLocaleDateString('pt-BR');

  return formattedDate;
};
