export class Post {

  static fromJsonList(array): Post[] {
    return array.map(Post.fromArray);
  }

  static fromArray({$key, post_title, post_body, date, user}): Post {
    return new Post($key, post_title, post_body, date, user);
  }

  constructor(
    public $key: string,
    public post_title: string,
    public post_body: string,
    public date: string,
    public user: string
  ) {}
}
