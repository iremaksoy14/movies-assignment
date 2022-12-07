const UserData = {
  AUTH_TOKEN_KEY_NAME: 'WTW-userToken',
  AVATAR: 'WTW-userAvatar',
  EMAIL: 'WTW-userEmail',
  ID: 'WTW-userId',
  NAME: 'WTW-userName',
};

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(UserData.AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const getUserAvatar = (): string => {
  const userAvatar = localStorage.getItem(UserData.AVATAR);
  return userAvatar ?? '';
};

export const saveUserData = (token: Token, avatarUrl: string, userEmail: string, id: number, name: string): void => {
  localStorage.setItem(UserData.AUTH_TOKEN_KEY_NAME, token);
  localStorage.setItem(UserData.AVATAR, avatarUrl);
  localStorage.setItem(UserData.EMAIL, userEmail);
  localStorage.setItem(UserData.ID, String(id));
  localStorage.setItem(UserData.NAME, name);
};

export const dropUserData = (): void => {
  localStorage.removeItem(UserData.AUTH_TOKEN_KEY_NAME);
  localStorage.removeItem(UserData.AVATAR);
  localStorage.removeItem(UserData.EMAIL);
  localStorage.removeItem(UserData.ID);
  localStorage.removeItem(UserData.NAME);
};
