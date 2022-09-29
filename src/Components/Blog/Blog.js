import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>All Blogs</h1>
            <div>
                <h2>1.How does react work</h2>
                <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript.You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            </div>
            <div>
                <h2>2.Difference between props and state</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                <p>Props :are immutable
                which lets React do fast reference checks
                are used to pass data down from your view-controller
                your top level component
                have better performance
                use this to pass data to child components</p>
                <p>State :should be managed in your view-controller
                your top level component
                is mutable
                has worse performance
                should not be accessed from child components
                pass it down with props instead</p>
            </div>
            <div>
                <h2>3.useEffect use without api data call</h2>
                <p>Prevent useEffect From Running Every Render
                useEffect Does Not Actively “Watch”
                Only Run Once, on Mount
                How To Fix The Warnings
                When Does useEffect Run?
                Run useEffect on State Change
                Run useEffect When a Prop Changes
                Focus On Mount
                Fetch Data With useEffect
                Re-fetch When Data Changes</p>
            </div>
        </div>
    );
};

export default Blog;