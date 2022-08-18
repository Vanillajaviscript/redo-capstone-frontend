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
<hr/>
<hr/>

## User Stories

- As a user, I want to:
  - Create, read, update, and delete a dog post
  - Register
  - Be authenticated to perform crud operations
  - Be authorized to edit or delete my personally created posts
  - Be able to view aggregate user posts of dogs
<hr/>
<hr/>

### Site Images
###### Site hosted on Netlify, visit [GoldenBond Rescue](https://dog-adoptions-rescue.netlify.app/).

Home
<img src="./images/Screen%20Shot%202022-08-11%20at%2011.03.14%20PM.png" />
<hr/>
Login
<img src="./images/Screen%20Shot%202022-08-11%20at%2011.03.37%20PM.png" />

<hr/>
<hr/>

### Wireframe

<img src="https://i.imgur.com/b91rk20.png">
<hr/>
<hr/>

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

<hr/>
<hr/>

### Technologies used

|   Backend    |     Frontend       |          Styling          |
| -------------|:------------------:| -------------------------:|
| MongoDB      | React.js           | Material Design Bootstrap |
| JWT          | Redux/Redux Toolkit|        Bootstrap          |
| Node.js      | React Toastify     |           CSS             |
| Express.js   | Moment             |                           |
| Axios        | React Router Dom   |                           |
<hr/>
<hr/>

#### Goal for each day
<br>

| Dog Adoptions Rescue | Fri | Sat | Sun | Mon | Tue | Wed
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Goals | Backend | Setup Authentication | Frontend  | Style pages | Add more logic if time allows | Finishing touches|
<hr/>
<hr/>

#### Future enhancements
- Provide ability to like posts
- Have the user be able to save other posts that they are not authorized to perform CRUD operations on
- Provide comments to other user's posts
