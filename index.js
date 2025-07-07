import {REACT} from "react";
import {ReactDOM} from "rect-dom";
import {App} from "./App";
import {PostProvider} from "./context/Postcontext";


ReactDOM,render(
    <React.StrictMode>
        <PostProvider>
            <App/>
        </PostProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
