export const truncate = (str, n) => str.length > n ? str.slice(0, n) + '...' : str;
export const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
