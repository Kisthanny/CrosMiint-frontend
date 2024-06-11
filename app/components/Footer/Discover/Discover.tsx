'use client'
import { discover } from "../../NavBar/Discover/Discover";
import LinkMenu from "../../NavBar/LinkMenu/LinkMenu";

const Discover = () => {
    return ( <section className="text-gray-500">
        <h3 className="font-bold text-xl">Discover</h3>
        <LinkMenu menuList={discover}/>
    </section> );
}
 
export default Discover;