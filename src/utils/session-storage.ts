export const setRefreshTokenSession = (token: string | null) =>
  token && sessionStorage.setItem("jtkn", token);

export const getRefreshTokenSession = () => sessionStorage.getItem("jtkn");

export const clearBrowserStorage = () => sessionStorage.clear();
