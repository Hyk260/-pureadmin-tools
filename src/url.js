/**
 * Build a path string from a path and a hash/search object
 * @param path
 * @param hash
 * @param search
 */
export const pathString = (path, { hash = "", search = "" }) => {
  const tempBase = "https://a.com";
  const url = new URL(path, tempBase);

  if (hash) url.hash = hash;
  if (search) url.search = search;
  return url.toString().replace(tempBase, "");
};
