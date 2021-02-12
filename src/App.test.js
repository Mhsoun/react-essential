import { render} from "@testing-library/react";
import React from "react";
import App from "./App"; 

test("reders an h1", ()=>{
    const {getByText } = render(<App/>);
    const h1 = getByText(/Hello react test library/); 
    expect(h1).toHaveTextContent(
        "Hello react test library"
    );
});