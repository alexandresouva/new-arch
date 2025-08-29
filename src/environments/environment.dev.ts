import { Environment } from './models/environments.model';

const baseURL = 'http://localhost:3000';

export const environment: Environment = {
  production: false,
  endpoints: {
    journey: `${baseURL}/journey`,
    journeyList: `${baseURL}/journeyList`
  }
};
