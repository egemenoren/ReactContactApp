import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, ReferenceField, TextInput, ShowButton, SearchInput } from 'react-admin';

const userFilter = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="Name" source="name" />,
    <TextInput label="Username" source="username" />,
    <TextInput label="E-Mail" source="email"/>,
    <TextInput label="Company Name" source="company.name"/>,

];

const UserList = () => {
    
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={userFilter}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                    tertiaryText={record => record.email}
                />
                
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="Username" source="id" reference="users">
                    <TextField source="username" />

                    </ReferenceField>
                    <TextField source="name" />
                    <TextField source="email" />
                    <ShowButton label='Detail' basePath="users"></ShowButton>
                </Datagrid>
            )}
        </List>
    );
};
export default UserList;