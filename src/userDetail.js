import * as React from "react";
import { Show, SimpleShowLayout, TextField, EmailField, TextInput,useRecordContext, UrlField } from 'react-admin';



const WebSite = () => {
    const record = useRecordContext();
    return <a target='_blank' rel='noreferrer' href={'https://www.'+record.website}>{'https://www.'+record.website}</a>
}

const FullAddress = () => {
    const record = useRecordContext();
    return <span>{record.address.street} {record.address.suite} <b>{record.address.city}</b> / {record.address.zipcode}</span>
}
const CompanyInfo = () => {
    const record = useRecordContext();
    return <span>{record.company.catchPhrase} <br></br>{record.company.bs} </span>
}
const GeoLocation = () => {
    const record = useRecordContext();
    const location = `http://www.google.com/maps/place/${record.address.geo.lat},${record.address.geo.lng}`;
    return <a target='_blank' rel="noreferrer" href={location}>Place User</a>
}

const UserDetail = () => (
    
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email"></EmailField>
            <TextField source="phone" />
            <WebSite label='Website' />
            <FullAddress label='Full Address' />
            <TextField source="company.name"/>
            <CompanyInfo label='Company Info (Catch Phrase and BS)'/>
            <GeoLocation label='Exact Location'></GeoLocation>
            

        </SimpleShowLayout>
    </Show>
);

export default UserDetail;