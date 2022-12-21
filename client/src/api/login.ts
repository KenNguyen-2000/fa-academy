export const loginAPI = async (email: string, password: string) => {
  const config: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };
  const res = await fetch(`${process.env.REACT_APP_DOMAIN}/auth`, config);
  return await res.json();
};
