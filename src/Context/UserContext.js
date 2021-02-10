import React, {createContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [pictures, setPictures] = useState([]);

  const apiurl = 'https://randomuser.me/api/?results=5';
  const fetchdata = async () => {
    try {
      const result = await fetch(apiurl);
      const jsonResult = await result.json();
      setPictures(jsonResult.results);
      console.log(pictures);
    } catch {
      (e) => console.log(e.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <UserContext.Provider value={{pictures}}>
      {children}
    </UserContext.Provider>
  );
};
