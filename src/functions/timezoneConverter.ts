const convertTimezone = (timezone: number): string => {
  const date = new Date(timezone);

  const formattedDate = date.toLocaleDateString('pt-BR');
  return formattedDate;
};

export default convertTimezone;
