import { config } from '../config/config';

const getUrlWithParamsConfig = (endpointConfig: string, query: object) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].url,
    query,
  };
};

export default getUrlWithParamsConfig;
