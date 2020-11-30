import * as React from 'react';
import { List, Datagrid, ReferenceField, TextField } from 'react-admin';

export const PostList = props => {
    return <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField label="Alien vs Name" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
};
