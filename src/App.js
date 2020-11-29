import * as React from 'react';
import { Admin, Resource/*, ListGuesser*/ } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList } from './posts';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

(() => {
    const oldLogError = console.error;
    console.error = function(...args) {
        if (typeof args[3] !== 'string' || args[3] !== 'Transition' ||
            typeof args[1] !== 'string' || args[1] !== 'findDOMNode' ||
            typeof args[0] !== 'string' || args[0].indexOf('is deprecated in StrictMode') === -1
            )
        { // arg[1,2] === 'findDOMNode'; arg[3] === 'transition'
            oldLogError.apply(console, args);
        } //else {console.log('me', args);}
    }
})();

function App() {
  return (
    <Admin dataProvider={dataProvider}>
        {/* <Resource name="users" list={ListGuesser}></Resource> */}
        <Resource name="users" list={UserList}></Resource>
        <Resource name="posts" list={PostList} />
    </Admin>
  );
}

export default App;
