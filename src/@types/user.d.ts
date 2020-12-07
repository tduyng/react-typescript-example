interface ReqLogin {
  username: string;
  password: string;
  email?: string;
}
interface ResLoginApi extends Res {
  data: {
    id: string;
    username: string;
    email: string;
    password: string;
  };
}

interface IUser {
  id: string;
  username: string;
  email?: string;
  password: string;
}

interface DispatchAuth {
  type: string;
  payload?: any;
}
