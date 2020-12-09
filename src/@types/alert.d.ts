//eslint-disable-next-line
enum AlertTypes {
  SUCCESS = 'sucess',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

interface IAlert {
  id: string;
  msg: string;
  type: AlertTypes;
}
