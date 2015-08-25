import React    from 'react';

import App      from './components/App.jsx';

var contacts = [
    {
        name: 'asdfas',
        surName: 'sdfsd',
        phone: '25675',
        comment: 'sdfgjd;l j;ldjg;ldfj;sdfg;fldkjg;lkd jgjws ;djfg; lsdf'
    },
    {
        name: 'asdfas',
        surName: 'sdfsd',
        phone: '25675',
        comment: 'sdfgjd;l j;ldjg;ldfj;sdfg;fldkjg;lkd jgjws ;djfg; lsdf'
    },
    {
        name: 'asdfas',
        surName: 'sdfsd',
        phone: '25675',
        comment: 'sdfgjd;l j;ldjg;ldfj;sdfg;fldkjg;lkd jgjws ;djfg; lsdf'
    }
];

React.render(<App contacts={contacts}/>, document.getElementById("app"));