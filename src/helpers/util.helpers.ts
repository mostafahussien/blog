export const isServer = typeof window === "undefined";

export const isURL = (url: string | unknown | undefined) => {
  if (!url) return false;
  if (typeof url === "string") return /http|www|\./.test(url);
  return url;
};
