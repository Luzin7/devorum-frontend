import {
  ONE_DAY_IN_MILLISECONDS,
  ONE_HOUR_IN_MILLISECONDS,
  ONE_MINUTE_IN_MILLISECONDS,
  ONE_SECOND_IN_MILLISECONDS
} from 'constants/times';

export const dateConverter = (timezone: Date): string => {
  const now = new Date().getTime();
  const date = new Date(timezone).getTime();

  const diffInMilliseconds = now - date;

  const intervals = [
    { label: 'ano', milliseconds: ONE_DAY_IN_MILLISECONDS * 365 },
    { label: 'mês', milliseconds: ONE_DAY_IN_MILLISECONDS * 30 },
    { label: 'dia', milliseconds: ONE_DAY_IN_MILLISECONDS },
    { label: 'hora', milliseconds: ONE_HOUR_IN_MILLISECONDS },
    { label: 'minuto', milliseconds: ONE_MINUTE_IN_MILLISECONDS },
    { label: 'segundo', milliseconds: ONE_SECOND_IN_MILLISECONDS }
  ];

  for (const { label, milliseconds } of intervals) {
    const interval = Math.floor(diffInMilliseconds / milliseconds);

    if (interval >= 1) {
      const pluralLabel =
        interval > 1 && label === 'mês'
          ? 'meses'
          : interval > 1
            ? `${label}s`
            : label;
      return `${interval} ${pluralLabel} atrás`;
    }
  }

  return 'agora mesmo';
};
