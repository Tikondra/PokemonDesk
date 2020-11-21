import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async (endpoint: string) => {
  const url = Url.format(getUrlWithParamsConfig(endpoint));

  return await fetch(url).then((res) => res.json());
};

export default req;
