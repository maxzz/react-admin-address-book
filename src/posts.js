import * as React from 'react';
import { List, Datagrid, ReferenceField, TextField, EditButton, Create, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, Filter } from 'react-admin';

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
    <Edit title={<PostTitle />} {...props}>
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

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostFilter = (props) => {
    return (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput source="userId" reference="users"><SelectInput label="User" optionText="name" /></ReferenceInput>
        </Filter>
    );
};

export const PostList = props => {
    return <List {...props} filters={<PostFilter/>}>
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
