import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async (endpoint: string, query: object) => {
  const url = Url.format(getUrlWithParamsConfig(endpoint, query));

  return await fetch(url).then((res) => res.json());
};

export default req;
