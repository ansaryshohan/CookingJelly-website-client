import React from 'react';
import HeadTitle from '../../Shared/HeadTitle';

const Blog = () => {
  return (
    <div>
      {/* Head title component is here */}
      <HeadTitle title='Blog' />

      <div>
        <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
          <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. what is Difference between SQL and NoSQL??</h1>
          <p className='text-lg font-normal pl-4'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). <br />NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br /> There are five practical differences between SQL and NoSQL:<br />

            1.Language<br />
            2.Scalability<br />
            3.Structure<br />
            4.Properties<br />
            5.Support and communities</p>
        </div>
        <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
          <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. What is JWT and how it works?</h1>
          <p className='text-lg font-normal pl-4'>JWT is used for authorization purpose,not authentication.<br />
            How JWT works: <br /> 1. Client login with email and password are given a token by the server. <br />2. Client stores the token on either Local Storage or in the cookies. <br />3.Next time the client make a request the copy of the token also reaches the server fot authentication. <br />4. The server verifies the token and sends response accordingly . </p>
        </div>
        
        <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
          <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. What is the differences between Javascript and NodeJs?</h1>
          <p className='text-lg font-normal pl-4'>Node is a runtime of javascript. <br /> <span className='text-orange-400'>Node.JS= Runtime Environment+ Javascript Library.</span>
            <br /> Node has some special features:
            <br />
            1.Node is asynchronous and Event driven. <br />
            2. It is very Fast. <br />
            3.Single threaded but Highly scalable.
            <br />4. No buffering.
          </p>
          <p className='text-lg font-normal pl-4'> javascript is a programming language. <br /> <span className='text-orange-400'>JavaScript is a high level interpreted programming language.</span>
            <br /> Javascript has some special features:
            <br />
            1.Javascript is a language used to make web pages more interactive <br />
            2. It is very Fast. <br />
            3.Single threaded but Highly scalable.
            <br />4. it lets us  implement complex and beautiful design on the web page.
          </p>
        </div>

        <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
          <h1 className='text-xl font-medium text-[#028090] mb-3'>Q.How NodeJs handle Multiple request at the same time?</h1>
          <p className='text-lg font-normal pl-4'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. .<br /> If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself.<br /> 
          But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;