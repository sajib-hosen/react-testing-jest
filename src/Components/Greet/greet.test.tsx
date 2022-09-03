import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe("Greet",()=>{
    
    test("greet randers",()=>{
        render(<Greet name="Ratin"/>);
        const textEle = screen.getByText('Hello Ratin');
        expect(textEle).toBeInTheDocument();
    })

    it("renders learning JEST",()=>{
        render(<Greet/> );
        const textEle = screen.getByText('Learning JEST');
        expect(textEle).toBeInTheDocument();
    })

})



/*
WHAT TO TEST
    1, Test component renders.
    2, Test component renders with props.
    3, Test component renders in diffrent state.
    4, Test component reacts on events.
*/

/*
FIND SINGLE ELEMENT
    1, getBy...
    2, queryBy... 
    3, findBy... 

FIND MULTIPLE ELEMENTS
    1, getAllBy... 
    2, queryAllBy... 
    3, findAllBy... 
    
*/
