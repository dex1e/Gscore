export interface IAuthInitialState {
  token: string;

  user: {
    id: number | null;
    email: string;
    username: string;
  };
}
