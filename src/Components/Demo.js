import React from 'react';

const Demo = (props) => {
    console.log(props);
    return (
        <div>
            <h1><i>{props.number}</i></h1>
        </div>
    );
};
export default Demo;