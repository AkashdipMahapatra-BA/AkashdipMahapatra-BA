export const BadgeGrid = ({ badges }) => badges.map(b => `<img src="${b.src}" alt="${b.alt}" />`).join('');
