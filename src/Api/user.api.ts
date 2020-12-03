export const loginApi = ({
  username,
  password,
}: ReqLogin): Promise<ResLoginApi> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        resolve({
          data: {
            access_token: '82jdu82193yh90sad83hxfgsd',
          },
          message: 'Login successfully',
        });
      } else {
        reject(new Error('Login failed'));
      }
    }, 100);
  });
