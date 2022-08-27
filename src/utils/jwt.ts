export const JWT_TOKEN = '@eks_dev/access-token';

export const getToken = () => {
  localStorage.getItem(JWT_TOKEN);
};

export const setToken = (value: string) => {
  localStorage.setItem(JWT_TOKEN, value);
};
