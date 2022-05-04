import React, {useState, useEffect} from "react";
import Card from "./Card";
const UseEffectAPI = () => {
    const [users, setUsers] =useState([]);
    const getUsers= async () => {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());
    }

    useEffect(() =>{
        getUsers();
    }, []);

    return(        
        <>
          <h2 className='heading'>GITHUB USERS</h2>
        <div className='cardContainer'>
        {users.map(function ncard(val){  //can use arrow function as well
           return <Card
           key={val.id}
           title={val.login}
           description={val.company}
           img={val.avatar_url}  
           url={val.html_url}        
           />
      })}
      </div>
        </>
    )
}
export default UseEffectAPI;