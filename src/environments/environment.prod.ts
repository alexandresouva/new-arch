import { Environment } from './models/environments.model';

const baseURL = 'https://new-arch-api.azurewebsites.net';

export const environment: Environment = {
  production: true,
  endpoints: {
    journey: `${baseURL}/journey`,
    journeyList: `${baseURL}/journey`
  }
};
