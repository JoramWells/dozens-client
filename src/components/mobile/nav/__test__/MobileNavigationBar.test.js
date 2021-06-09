import React from 'react'
import ReactDOM from 'react-dom'
import {isTSAnyKeyword} from '@babel/types'
import MobileNavigationBar from '../MobileNavigationBar'
import {render} from '@testing-library/react'
import "jest-dom/extend-expect"

it("renders without crashing", ()=>{
    const nav = document.createElement("div");
    ReactDOM.render(<MobileNavigationBar/>,nav)
})

it("renders Navbar correctly",()=>{
    const {getByTestId} = render(<MobileNavigationBar home="jay" />)
    expect(getByTestId('mobile_nav')).toHaveTextContent("")
    

})