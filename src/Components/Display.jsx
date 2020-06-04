import React from 'react';

function Display({count}) {
    // const [display,setDisplay] = useState(0);

    return (
        <section className="display">
           <h1> {count} </h1>
        </section>
    );


};

export default Display;

