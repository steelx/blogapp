
import {data} from './json-data';
import {environment} from "./src/environments/environment";
import {initializeApp, database} from "firebase";

initializeApp(environment.firebase);


const postsRef = database().ref('posts');
const usersRef = database().ref('users');



data.users.forEach(
  user => {
    console.log('inside users loop');
    const userRefKey = usersRef.push({
      "first_name": user.first_name,
      "last_name": user.last_name,
      "email": user.email,
      "department": user.department,
      "username": user.username
    }).key;

    const postKeysByUser = [];

    data.posts.forEach(
      post => {
        console.log('inside posts loop');
        console.log(userRefKey);

        if (post.user === user.username) {
          postKeysByUser.push(postsRef.push({
            "post_title": post.post_title,
            "post_body": post.post_body,
            "date": post.date,
            "user": post.user
          }).key);
        }

      }
    );



    const association = database().ref('postsPerUser');

    const postsPerUser = association.child(userRefKey);

    postKeysByUser.forEach(postKey => {
      console.log('adding post to userKey ');

      const postsUsersAssociation = postsPerUser.child(postKey);

      postsUsersAssociation.set(true);
    });

  }
);

console.log('done, press CTRL + C to exit');
