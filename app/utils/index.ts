import { Platform } from 'react-native';

import { IPrettyAccount, IServiceAccounts, IServices } from './Types';

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export const prettyUserAccounts = (
  users: IServiceAccounts,
  services: IServices,
): IPrettyAccount[] => {
  if (!users || !services) {
    return [];
  }

  const result = Object.keys(services).reduce((total, serviceId) => {
    const service = services[serviceId];
    const serviceUsers = Object.values(users[serviceId] || {});
    return [...total, ...serviceUsers.map((user) => ({ ...user, service }))];
  }, []);

  return result;
};
