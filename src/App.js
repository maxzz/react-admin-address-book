import * as React from 'react';
import { Admin, Resource/*, ListGuesser*/ /*, EditGuesser */ } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import { UserList } from './users';
import { PostList, PostCreate, PostEdit } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

if (process.env.NODE_ENV !== 'production') {
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
        const oldLogWarn = console.warn;
        console.warn = function(...args) {
            if (typeof args[0] !== 'string' || args[0].indexOf('history') === -1) {
                oldLogWarn.apply(console, args);
            }
        }
    })();
}

function App() {
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} >
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} />
        {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
        {/* <Resource name="users" list={ListGuesser}></Resource> */}
        <Resource name="users" list={UserList} icon={UserIcon}></Resource>
    </Admin>
  );
}

export default App;
