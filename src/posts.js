import * as React from 'react';
import { List, Datagrid, ReferenceField, TextField } from 'react-admin';

export const PostList = props => {
    console.log(props);
    return <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
};
