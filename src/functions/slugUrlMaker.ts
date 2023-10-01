export const slugUrlMaker = (url: string) => {
  const slugUrl = url.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  return slugUrl;
};
