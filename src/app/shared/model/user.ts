export class User {

  static fromJsonList(array): User[] {
    return array.map(User.fromArray);
  }

  static fromArray({$key, first_name, last_name, email, department, username}): User {
    return new User($key, first_name, last_name, email, department, username);
  }

  constructor(
    public $key: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public department: string,
    public username: string
  ) {}
}
