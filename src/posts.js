import * as React from 'react';
import { List, Datagrid, ReferenceField, TextField, EditButton } from 'react-admin';

export const PostList = props => {
    return <List {...props}>
        {/* <Datagrid rowClick="edit"> */}
        <Datagrid>
            <TextField label="ID" source="id" />
            <ReferenceField label="Alien vs Name" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            {/* <TextField label="ID" source="id" /> */}
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
};
