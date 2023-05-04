import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 mt-5'>
            <div className='shadow-lg p-3 rounded'>
                <h1>01. What is the differences between uncontrolled and controlled components?</h1>
                <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='shadow-lg p-3 rounded'>
                <h1>02. How to validate React props using PropTypes?</h1>

                <p>
                    01. PropTypes.any : The prop can be of any data type.
                    02. PropTypes.bool : The prop should be a Boolean.
                    03. PropTypes.number : The prop should be a number.
                    04. PropTypes.string : The prop should be a string.
                    05. PropTypes.func : The prop should be a function.
                    06. PropTypes.array : The prop should be an array.
                </p>

            </div>
            <div className='shadow-lg p-3 rounded'>
                <h1>03. What is the difference between nodejs and express js?</h1>
                <p>NodeJS is the package, which provides the JavaScript run-time environment. <br /> Whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div className='shadow-lg p-3 rounded'>
                <h1>04. What is a custom hook, and why will you create a custom hook?</h1>
                <p>Custom Hooks are a mechanism to reuse stateful logic. Such as setting up a subscription and remembering the current value. <br />The main reason to write a custom hook is for code reusability and fot that we create custom hook.</p>
            </div>
        </div>
    );
};

export default Blog;