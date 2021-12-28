// Here file name must be index.js in order to get the correct page from blog folder.
// if we change the filename than the browser will show not found error.

import Navbar from "../../components/Navbar";

const blog = () => {
    return (
        <div>
        <Navbar/>
            <h1>
                index file about my blog.
            </h1>
        </div>
    )
}

export default blog;