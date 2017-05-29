
import {data} from './json-data';
import {environment} from "./src/environments/environment";
import {initializeApp, database} from "firebase";

initializeApp(environment.firebase);


const postsRef = database().ref('posts');
const usersRef = database().ref('users');



data.posts.forEach(
  post => {
    postsRef.push({
      "post_title": post.post_title,
      "post_body": post.post_body,
      "date": post.date,
      "user": post.user
    });
  }
);

data.users.forEach(
  user => {
    usersRef.push({
      "first_name": user.first_name,
      "last_name": user.last_name,
      "email": user.email,
      "department": user.department,
      "username": user.username
    });
  }
);
