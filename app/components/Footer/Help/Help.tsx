'use client'

import { helpCenter } from "../../NavBar/HelpCenter/HelpCenter";
import LinkMenu from "../../NavBar/LinkMenu/LinkMenu";

const Help = () => {
    return ( <section className="text-gray-500">
        <h3 className="font-bold text-xl">Help Center</h3>
        <LinkMenu menuList={helpCenter}/>
    </section> );
}
 
export default Help;