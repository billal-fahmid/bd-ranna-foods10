import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className='py-24'>
            <div className='text-center'>
                <h2 className='text-[#43121d] text-4xl font-semibold mb-5'>Frequently Asked Questions</h2>

            </div>

            <div ref={ref} className="w-full  px-4 mx-auto mt-20 space-y-2 shadow ">
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">Tell us the differences between uncontrolled and controlled components.</summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                            In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        How to validate React props using PropTypes?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                            A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.




                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        Tell us the difference between nodejs and express js?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                            js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        What is a custom hook, and why will you create a custom hook?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. <br />
                            It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                        </p>
                    </div>
                </details>
            </div>

            <Pdf targetRef={ref} filename="FAQ.pdf">
                {({ toPdf }) => <button className="bg-[#a82d49]  hover:bg-white hover:text-[#a82d49] hover:border border-[#a82d49] text-white font-bold py-2 px-6  mt-10" onClick={toPdf}>Generate Pdf</button>}
            </Pdf>

        </div>
    );
};

export default Blog;