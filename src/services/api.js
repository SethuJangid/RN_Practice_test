import axios from 'axios';

export const getUsers = async (url) => {
  const res = await axios({
    method: 'get',
    url: 'https://reqres.in/api/users',
  });
  return res;
};
export const getArticalData = async (url) => {
  const res = await axios({
    method: 'get',
    url: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7c94c4bf82af4e18a0ba534482945782',
  });
  return res;
};
export const registerUser = async (data) => {
  const res = await axios({
    method: 'post',
    url: `https://reqres.in/api/users`,
    data:data
  });
  // console.log(res,"responce is here")
  return res;
};
export const loginUser = async (data) => {
  const res = await axios({
    method: 'post',
    url: `https://reqres.in/api/login`,  
    data:data
  });
  return res;
};

// meth().then(res => {
//   set(res).catch(err => {
//     console.log(error);
//   });
// });