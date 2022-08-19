export interface IAuthInitialState {
  auth: {
    token: string;

    user: {
      id: number;
      email: string;
      username: string;
    };
  };
}
