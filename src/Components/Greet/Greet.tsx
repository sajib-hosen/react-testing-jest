import React from 'react';

type greetProps = {
    name?: string
}

const Greet = ({name}: greetProps) => {
    return (
        <div>
            <p>Hello {name}</p>
            <p>Learning JEST</p>
        </div>
    );
};

export default Greet;