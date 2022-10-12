import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse text-center w-3/4 mx-auto my-5">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title font-bold bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    What is the purpose of React Router?
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
  </div>
</div>
            <div className="collapse text-center w-3/4 mx-auto my-5">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title font-bold bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    How does Context API work?
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
  </div>
</div>
            <div className="collapse text-center w-3/4 mx-auto my-5">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title font-bold bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    What is useRef? How does it work?
  </div>
  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div , React will set its current property to the corresponding DOM node whenever that node changes.</p>
  </div>
</div>
        </div>
    );
};

export default Blog;