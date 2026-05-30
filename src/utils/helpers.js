// Utility helpers
export const formatDate = (d) => new Date(d).toLocaleDateString();
export const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');
