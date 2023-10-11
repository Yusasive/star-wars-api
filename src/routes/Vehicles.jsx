import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

const Vehicles = () => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles")
      .then(res => res.json())
      .then(data => {
        setVehiclesData(data.results)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])


  return (
    <div className='bg-slate-100 dark:bg-slate-800 min-h-screen'>
      <h2 className='text-4xl p-5 text-black dark:text-[#FFC107]'>Vehicles &#8594;</h2>
      {isLoading ? <Loading /> : (
        <>
          <div className="m-auto">
            {
              isLoading ? <Loading /> :
                vehiclesData.length ? <div className="flex flex-wrap justify-center">
                  {vehiclesData.map((specie, id) => {
                    return (
                      <VehiclesCard
                        key={id}
                        name={specie.name}
                        model={specie.model}
                        passengers={specie.passengers}
                        max_atmosphering_speed={specie.max_atmosphering_speed}
                        vehicle_class={specie.vehicle_class}
                        manufacturer={specie.manufacturer}
                      />)
                  })}
                </div> : <p className='text-center text-gray-500 font-semibold my-[20vh]'>Please check your internet connection and try again.</p>

            }
          </div>
        </>
      )
      }
    </div>
  )
}

const VehiclesCard = ({ name, model, passengers, max_atmosphering_speed, manufacturer, vehicle_class }) => {
  return (
    <div className="bg-white w-screen sm:max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5">{name}</div>
        <p className="text-gray-700 text-base mb-3">
          <strong>Model: </strong>
          <br />
          {model}
        </p>

        <p className="text-gray-700 text-base mb-3">
          <strong>Passengers: </strong>
          <br />
          {passengers}
        </p>

        <p className='text-gray-700 text-base mb-3'>
          <strong>Passengers: </strong>
          <br />
          {max_atmosphering_speed}km/h
        </p>
        <p className='text-gray-700 text-base mb-3'>
          <strong>Manufacturer: </strong>
          <br />
          {manufacturer}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{vehicle_class}</span>
      </div>
    </div>
  )
}

export default Vehicles