interface ReqLogin {
  username: string;
  password: string;
}
interface ReqRegister {
  username: string;
  email: string;
  password: string;
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
