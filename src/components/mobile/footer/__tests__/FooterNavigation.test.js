import {render,cleanup,screen} from '@testing-library/react'
import FooterNavigation from '../FooterNavigation'

test("it should render footer component",()=>{
    render(<FooterNavigation />)
    const footerElement = screen.getByTestId("footer_div");
    expect(footerElement).toBeInTheDocument()
})