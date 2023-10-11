import { useState, useEffect } from 'react';
import Loading from '../components/Loading';


const Species = () => {
  const [speciesData, setSpeciesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/species")
      .then(res => res.json())
      .then(data => {
        setSpeciesData(data.results)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])


  return (
    <div className='bg-slate-100 dark:bg-slate-800 min-h-screen'>
      <h2 className='text-4xl p-5 text-black dark:text-[#FFC107]'>Species &#8594;</h2>
      {isLoading ? <Loading /> : (
        <>
          <div className='m-auto'>
            {
              isLoading ? <Loading /> :
                speciesData.length ? <div className="flex flex-wrap justify-center">
                  {speciesData.map((specie, id) => {
                    return (
                      <SpeciesCard
                        key={id}
                        name={specie.name}
                        average_height={specie.average_height}
                        average_lifespan={specie.average_lifespan}
                        language={specie.language}
                        designation={specie.designation}
                        classification={specie.classification}
                        hair_colors={specie.hair_colors}
                        eye_colors={specie.eye_colors}
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

const SpeciesCard = ({ name, average_height, average_lifespan, language, designation, classification, hair_colors, eye_colors }) => {
  return (
    <div className="bg-white w-screen sm:max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5">{name}</div>
        <p className="text-gray-700 text-base mb-3">
          <strong>Avg Height: </strong>
          <br />
          {average_height}cm
        </p>

        <p className='text-gray-700 text-base mb-3'>
          <strong>Avg Lifespan: </strong>
          <br />
          {average_lifespan}
        </p>

        <p className='text-gray-700 text-base mb-3'>
          <strong>Language: </strong>
          <br />
          {language}
        </p>

        <p className='text-gray-700 text-base mb-3'>
          <strong>Hair Colors: </strong>
          <br />
          {hair_colors}
        </p>

        <p className='text-gray-700 text-base mb-3'>
          <strong>Eye Colors: </strong>
          <br />
          {eye_colors}
        </p>

      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{designation}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{classification}</span>
      </div>
    </div>
  )
}

export default Species