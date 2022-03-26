import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>Different between Props and state</h1>
            <p>
                props are generally use to send data from parant component to child component wher state is use for contain data and update data for the
                site.You can not sent data using props from child component to parent component.You will be able to sent data child to parent if use uplift.in
                state something is mutable is called state.
            </p>
        </div>
    );
};

export default Question