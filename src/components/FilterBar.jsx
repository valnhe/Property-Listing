import {useEffect, useState} from "preact/hooks";
import "./FilterBar.css"

function FilterBar({filter, setFilter}){
    const [location, setLocation] = useState(filter.location);
    const [superhost, setSuperhost] = useState(filter.superhost);
    const [type, setType] = useState(filter.type);

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

    function handleType(e){
        if (e.target.value === "true") {
            setType(true);
        } else {
            setType(parseInt(e.target.value));
        }
    }

    useEffect(() => {
        setFilter({ ...filter, location: location, superhost: superhost, type: type });
    }, [location, superhost, type]);



    return(
        <section className="flex flex-wrap justify-center gap-y-5 lg:gap-y-0 lg:justify-between items-center px-[40px] py-[32px] -mt-[42px] mb-[48px] text-[#F2F9FE] bg-[#20293af2] border-[1.8px] rounded-[15px] border-[#434D5F]">
            <ul className="flex flex-wrap justify-center gap-[12px] *:px-[12px] *:py-[8px] *:cursor-pointer *:font-medium">
                <li onClick={() => handleLocation("all")} className={location.length === 0? `active` : ""}>All Stays</li>
                <li onClick={() => handleLocation("Norway")} className={location.includes("Norway")? `active` : ""}>Norway</li>
                <li onClick={() => handleLocation("Finland")} className={location.includes("Finland")? `active` : ""}>Finland</li>
                <li onClick={() => handleLocation("Sweden")} className={location.includes("Sweden")? `active` : ""}>Sweden</li>
                <li onClick={() => handleLocation("Switzerland")} className={location.includes("Switzerland")? `active` : ""}>Switzerland</li>
            </ul>

            <div className="flex flex-wrap gap-[20px] justify-center items-center">
                <label className="switch">
                    <div >
                        <input type="checkbox" onChange={handleSuperhost}/>
                        <span class="slider"></span>
                    </div>
                    <span className="text-[14px]">Superhost</span>
                </label>
                <label className="px-[24px] py-[12px] border-2 border-[#434D5F] rounded-xl flex items-end gap-3">
                    <select name="SortBy" id="sortby" defaultValue={"population"} onChange={handleType} className="w-full appearance-none bg-transparent font-medium">
                        <option value="population" className="text-[#1A1B1D]" disabled selected>
                            Property type
                        </option>
                        <option value={true} className="text-[#1A1B1D]">All options</option>
                        <option value={1} className="text-[#1A1B1D]">1 Bedroom</option>
                        <option value={2} className="text-[#1A1B1D]">2 Bedroom</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 9l6 6l6 -6" />
                    </svg>
            </label>
            </div>

        </section>
    )
} export default FilterBar;