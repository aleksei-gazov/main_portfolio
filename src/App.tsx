import React from 'react';
import s from './App.module.css';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Skills from './component/skills/Skills';
import My_works from './component/ my_works/My_works';
import RemoteWork from './component/ RemoteWork/RemoteWork';
import Contacts from './component/contacts/Contacts';
// import Contacts from './component/ сontacts/Contacts';

const App = () => {
    return (
        <div >
            <Header/>
            <Main/>
            <Skills/>
            <My_works/>
            <RemoteWork/>
            <Contacts/>
            {/* <Contacts/> */}
        </div>
    );
}

export default App;
