import config from 'config';

const fetchGameConfig = async (_: any, { signal }: any) => {
  const res = await fetch(config.apiUrl, { signal });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

export default fetchGameConfig;
