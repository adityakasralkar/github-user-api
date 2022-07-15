import React , {useState} from 'react';
import axios from "axios";
import  SearchBar  from "./SearchBar";
import DisplayUserComponent from "./DisplayUserComponent";



const configObj = {
    client_id: process.env.REACT_CLIENT_ID,
    client_secret:process.env.REACT_CLIENT_SECRET,
    repos_count:process.env.REACT_REPOS_COUNT,
    repos_sort: process.env.REACT_REPOS_SORT,
    token: process.env.REACT_TOKEN
  };

const UserContainer = () => {

    //api calls
const [userData, setUserData] = useState({});

const fetchUserDetails = async (searchKey) => {
  // console.log(searchKey);
  const {
    data
  } = await axios.get(
    `https://api.github.com/users/${searchKey}?client_id=${configObj.client_id}&client_secret=${configObj.client_secret}`,
    { headers: { Authorization: configObj.token } }
  );
  setUserData(data);

  // call the api fetch, axios npm i axios
};


  return (
    <div>
        <SearchBar fetchUserDetails={fetchUserDetails} />
        <DisplayUserComponent userData={userData} />
    </div>
  )
}

export default UserContainer