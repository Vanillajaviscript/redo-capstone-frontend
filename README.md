# Dog Adoptions Rescue Application

---
<img src="https://wallup.net/wp-content/uploads/2015/06/Frienship-is-good.jpg">

---
## Project Idea
<br>

Dog Adoption Site:

- Create, Read, Update, Delete
- Authentication using Google and email/password
- Authorized users can perform CRUD operations on their created dogs only

---

### User Stories
- As a user, I want to:
  - Create, read, update, and delete a dog post
  - Register
  - Be authenticated to perform crud operations
  - Be authorized to edit or delete my personally created posts
  - Be able to view aggregate user posts of dogs

### Wireframe

<img src="https://i.imgur.com/b91rk20.png">

### Models

```js
const userSchema = mongoose.Schema({
      name: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String, required: false},
      googleId: {type: String, required: false},
      id: {type: String},
});

const dogSchema = mongoose.Schema({
  dogName: String,
  description: String,
  tags: [String],
  imageFile: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
```


### Libraries/ Technologies/ Database

- Express
- Node.js
- Redux
- Redux toolkit
- React.js
- Material Design Bootstrap
- Bootstrap
- JWT
- Google Authentication
- MongoDB
- Axios
- Moment
- React Google Login
- React Toastify
- React Router Dom
- 
#### Goal for each day
<br>

| Dog Adoptions Rescue | Fri | Sat | Sun | Mon | Tue | Wed
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Goals | Backend | Setup Authentication | Frontend  | Style pages | Add more logic if time allows | Finishing touches|

#### Future enhancements
- Provide ability to like posts
- Have the user be able to save other posts that they are not authorized to perform CRUD operations on
- Provide comments to other user's posts
