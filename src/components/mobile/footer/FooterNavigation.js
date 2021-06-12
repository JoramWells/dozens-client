import { PlusCircleIcon } from '@heroicons/react/outline'
import React from 'react'

function FooterNavigation() {
    return (
        <footer className="bottom-0 fixed p-2 w-full bg-white flex flex-col justify-center items-center content-center mobile__footer" data-testid="footer_div">
            <div>
                <PlusCircleIcon className="h-5" />
            </div>
        </footer>
    )
}

export default FooterNavigation
