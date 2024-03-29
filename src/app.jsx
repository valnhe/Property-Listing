import Hero from "./components/Hero"
import FilterBar from "./components/FilterBar";
import Card from "./components/Card";
import getProperties from "./lib/getProperties";

import {useEffect, useState} from "preact/hooks";

export function App() {

  const [data, setData] = useState(null);
  const [filter, setFilter] = useState({ location: [], superhost: false , type: true});

  async function getStays() {
    const data = await getProperties();
    setData(data);
  }

  useEffect(() => {
    getStays();
  }, []);
 
  const filteredData = data ? data.filter((property) => {
    const location = filter.location.length === 0 || filter.location.includes(property.location)
    const superhost = filter.superhost ? property.superhost : true;
    const type = filter.type === true ? true : filter.type === property.capacity.bedroom;

    return location && superhost && type;

  }): [];

  return (

    <>
      <Hero/>
      <main class="max-w-full px-8 lg:px-0 lg:max-w-[748px] xl:max-w-[1136px] mx-auto mb-24">
        <FilterBar filter={filter} setFilter={setFilter}/>
        <h3 class="ml-28 lg:mx-0 mb-[32px] text-[24px] font-semibold text-[#F2F9FE]">Over 200 stays</h3>
        <section class="grid justify-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 gap-y-[72px]">

          {
            data && filteredData.map((property) => {
              return (
                <Card
                  title={property.title}
                  description={property.description}
                  price={property.price}
                  rating={property.rating}
                  superhost={property.superhost}
                  capacity={property.capacity}
                  image={property.image}
                />
              )
            })
          }
        </section>
      </main> 
    </>
  )
}
