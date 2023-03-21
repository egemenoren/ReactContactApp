import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import React from "react";
import UserList from "../userList";
import UserDetail from "../userDetail";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} show={UserDetail}/>
  </Admin>
);

export default App;