import { ONE_SECOND_IN_MILLISECONDS } from 'constants/times';

export const dateConverter = (timezone: Date): string => {
  const now = new Date().getTime();
  const date = new Date(timezone).getTime();

  const diffInSeconds = (now - date) / ONE_SECOND_IN_MILLISECONDS;

  if (diffInSeconds < 60) {
    return 'agora mesmo';
  }

  const intervals = [
    { label: 'ano', seconds: 365 * 24 * 60 * 60 },
    { label: 'mês', seconds: 30 * 24 * 60 * 60 },
    { label: 'dia', seconds: 24 * 60 * 60 },
    { label: 'hora', seconds: 60 * 60 },
    { label: 'minuto', seconds: 60 }
  ];

  for (const { label, seconds } of intervals) {
    const interval = Math.floor(diffInSeconds / seconds);

    if (interval >= 1) {
      const pluralLabel =
        interval > 1 && label === 'mês'
          ? 'meses'
          : interval > 1 &&
              (label === 'ano' ||
                label === 'dia' ||
                label === 'hora' ||
                label === 'minuto' ||
                label === 'segundo')
            ? `${label}s`
            : label;

      return `há ${interval} ${pluralLabel}`;
    }
  }

  return 'agora mesmo';
};
