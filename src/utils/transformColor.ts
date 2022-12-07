export const transformColor = (color: string) => {
  switch (color) {
    case 'green':
      return '#bce7d4';

    case 'yellow':
      return '#ffe88a';

    case 'purple':
      return '#d4d1dc';

    case 'red':
      return '#970013';

    case 'midnightgreen':
      return '#2e3933';

    case 'spacegray':
      return '#302e2f';

    case 'silver':
      return '#e3e3db';

    case 'gold':
      return '#d4d2b9';

    case 'black':
      return '#1e201f';

    case 'white':
      return '#f7f7f7';

    case 'coral':
      return '#f9614c';

    default:
      return '#fff';
  }
};
