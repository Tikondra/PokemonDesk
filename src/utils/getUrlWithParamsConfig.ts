import { config } from '../config/config';

const getUrlWithParamsConfig = (endpointConfig: string) => {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].url,
  };
};

export default getUrlWithParamsConfig;
