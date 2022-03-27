import React from 'react';

const Question = () => {
    return (
        <div className='question'>
            <div>
                <h1>How React Works</h1>
                <p>React render our component and reflect it into actual dom which we show in webpage.React create virtual dom for Components,when we change something in our components react create a virtual dom for those components and compare with previous virtual dom and checked what is change  in it and whatever is change react update this and other components which is unchanged remain same as previous.For this reason our website works first as react changed only we have changed.It takes less reload time and website works faster.</p>
            </div>
            <div>
                <h1>Difference between Props and state</h1>
                <p>
                    Props is like argument to a function when we create a component inside react and we want to render it we sent props we want give to it. props are generally use to send data from parent component to child component where state is on the other hand is quite bit different,state is something inside of a component.You can not sent data using props from child component to parent component.You will be able to sent data child to parent if use uplift.instate something is mutable is called state.So, the big different between props and component is props we pass into a component and state handled inside of that component.
                </p>
            </div>
        </div>
    );
};

export default Question;