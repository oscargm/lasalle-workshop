const trimLeft = (str: string, remove: string) =>
  str ? (str.startsWith(remove) ? str.slice(1, str.length) : str) : '';
const trimRight = (str: string, remove: string) =>
  str ? (str.endsWith(remove) ? str.slice(0, -1) : str) : '';

export const generateUrl = (
  protocol: string,
  domain: string,
  port: number | string,
  ...path: string[]
) => {
  const safeProtocol = trimRight(protocol, ':');
  const safePort = port ? `:${port}` : '';
  const safePath =
    path && path.length > 0 ? path.map((r) => trimLeft(r, '/')).join('/') : '';

  return `${safeProtocol}://${domain}${safePort}/${safePath}`;
};
