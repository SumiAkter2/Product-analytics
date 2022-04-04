import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <h1>Blogs</h1>
           <h1>Q: 1.What is Semantic tag?</h1>
          <h2>Ans: Ans:Semantic tag is a HTML that present the meaning of  a webpage.So that Browser can easily understand the webpage.And it's improve the communication.Semantic tag is adding the information in the webpage which aids in communication.There are different kinds of Semantic tag,such as:</h2>
            <ul>
                <li>article</li>
                <li>table</li>
                <li>form</li>
                <li>footer</li>
            </ul>
            <h1>Q:Difference between  Inline block or  inline block elements?</h1>
                 <h2>Ans:1.A block element begins on a new line but inline-block remains inline with all the text around the element and appears the same as inline.
                2.Examples of block are:div,p,li,main etc.But inline block has no tag examples.
                3.CSS property of block is, display:block.CSS property of inline-block is, display: inline-block.</h2>
                 <h1>What is Contest API?What's the purpose of it?</h1>
                 <h2>Ans:A contest API is a process that produce global variable that can be pass around.It is called the alternative of prop dealing.It is easier, lighter to management.It enables to exchange unique details from one to another components.</h2>

        </div>
    );
};

export default Blogs;