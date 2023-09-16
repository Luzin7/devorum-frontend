const convertTimezone = (timezone: number): string => {
  const date = new Date(Number(timezone));

  const formattedDate = date.toLocaleDateString('pt-BR');
  return formattedDate;
};

export default convertTimezone;
