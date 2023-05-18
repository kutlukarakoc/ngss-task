# ngss-task

#### Live Demo : https://ngss-task.vercel.app/
 
### While preparing the project, I benefited from the https://dummyjson.com/docs API. With this API, I utilized the data from the "users" and "posts" endpoints and performed fake authentication. In order to log in, it is necessary to use the username and password information of the users available in the API. Below, I am providing a few of them.

#### username : kminchelle
#### password : 0lelplR

#### username : atuny0
#### password : 9uQFF1Lh

### In this project, I Used React, Typescript, Redux Toolkit, React Router Dom, React-Chartsjs-2, Axios and CSS.

### The project consists of 6 pages: Home, Profile, Users, Dashboard, Login, and Not Found.

#### The homepage displays posts belonging to users and the reactions received on those posts. To improve performance, initially, 10 posts are loaded, and at the bottom of the page, there is a "Load More Post" button to fetch the next 10 posts, and this process continues.
#### The profile page contains general information about the logged-in user.
#### On the Users page, users that match the applied filters are displayed, and by clicking on the "See User's Post" button on their user cards, the user's (if any) post information is shown.
#### The Dashboard page includes four charts titled gender, age, eye color, and department.
#### The Login page contains a form, and if a user logs in with a registered username and password in the API, it redirects them to the homepage.
#### The Not Found page functions when a page other than the four pages mentioned above is accessed. After the page is opened, if the user is logged in, it redirects to the homepage after 3 seconds; otherwise, it redirects to the login page.
#### I stored the login user information in the local storage to avoid the need for the user to log in repeatedly.
