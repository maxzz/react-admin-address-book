import * as React from 'react';
import { List, Datagrid, ReferenceField, TextField, EditButton, Create, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput disabled label="ID2" source="id" /> */}
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            {/* <TextInput label="ID2" source="id" /> */}
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="ID2" source="id" />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
            {/* <TextInput label="ID2" source="id" /> */}
            <TextInput source="title" />
            {/* <TextInput source="body" /> */}
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

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
