class UserModel {
  public id: string;

  public login: string;

  constructor({ id, login }: { id: string; login: string; }) {
    this.id = id;
    this.login = login;
  }
}