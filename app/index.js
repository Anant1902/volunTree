import * as React from 'react';
import MainContainerAdmin from '../navigation/MainContainerAdmin';
import MainContainerUser from '../navigation/MainContainerUser';



export default function App() {
  const page = "admi";
  return page === "admin" ? <MainContainerAdmin /> : <MainContainerUser />;
  
}
