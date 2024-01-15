import {useEffect, useState} from "preact/hooks";
import "./FilterBar.css"

function FilterBar({filter, setFilter}){
    const [location, setLocation] = useState([]);
    const [superhost, setSuperhost] = useState(false);

    function handleLocation(loc){
        if (loc === "all") {
            setLocation([]);
        } else {
            const locations = location.includes(loc) ? location.filter((r) => r !== loc): [...location, loc];    
            setLocation(locations);
        }
    }

    function handleSuperhost(){
        setSuperhost(!superhost);
    }

    useEffect(() => {
        setFilter({ ...filter, location: location, superhost: superhost });
    }, [location, superhost]);



    return(
        <section className="flex justify-between mx-[40px] py-[32px] -mt-[42px] mb-[48px] bg-[#20293af2] border rounded-[15px] border-[#97A3B6]">
            <ul className="flex gap-[12px] px-[40px] *:px-[12px] *:py-[8px] *:cursor-pointer">
                <li onClick={() => handleLocation("all")}>All Stays</li>
                <li onClick={() => handleLocation("Norway")}>Norway</li>
                <li onClick={() => handleLocation("Finland")}>Finland</li>
                <li onClick={() => handleLocation("Sweden")}>Sweden</li>
                <li onClick={() => handleLocation("Switzerland")}>Switzerland</li>
            </ul>

            <div className="flex gap-[20px] px-[40px] items-center">
                <label className="switch">
                    <div >
                        <input type="checkbox" onChange={handleSuperhost}/>
                        <span class="slider"></span>
                    </div>
                    <span>Superhost</span>
                </label>
                <p>propertytype</p>
            </div>

        </section>
    )
} export default FilterBar;