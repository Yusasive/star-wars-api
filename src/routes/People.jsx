import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

const People = () => {
  const [peopleData, setPeopleData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeopleData(data.results)
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])


  return (
    <div className='bg-slate-100 dark:bg-slate-800 min-h-screen'>
      <h2 className='text-4xl p-5 text-black dark:text-[#FFC107]'>People &#8594;</h2>
      {
        isLoading ? <Loading /> :
          peopleData.length ? <div className="flex flex-wrap justify-center">
            {peopleData.map((person, id) => {
              return (
                <PeopleCard
                  key={id}
                  gender={person.gender}
                  name={person.name}
                  birth_year={person.birth_year}
                  eye_color={person.eye_color}
                  skin_color={person.skin_color}
                  mass={person.mass}
                  height={person.height}
                />)
            })}
          </div> : <p className='text-center text-black dark:text-gray-500 font-semibold py-[40vh]'>Please check your internet connection and try again.</p>

      }
    </div>
  )
}

const PeopleCard = ({ name, gender, birth_year, eye_color, skin_color, mass, height }) => {
  return (
    <div className="bg-white w-[20rem] rounded-lg overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5">{name}</div>

        <p className="text-gray-700 text-base mb-2">
          <strong>Gender: </strong>
          <br />
          {gender}
        </p>

        <p className='text-gray-700 text-base mb-2'>
          <strong>Born: </strong>
          <br />
          {birth_year}
        </p>

        <p className='text-gray-700 text-base mb-2'>
          <strong>Eye Color: </strong>
          <br />
          {eye_color}
        </p>

        <p className='text-gray-700 text-base mb-2'>
          <strong>Skin Color: </strong>
          <br />
          {skin_color}
        </p>

        <p className='text-gray-700 text-base mb-2'>
          <strong>Mass: </strong>
          <br />
          {mass} kg
        </p>

        <p className='text-gray-700 text-base mb-2'>
          <strong>Height: </strong>
          <br />
          {height} cm
        </p>

      </div>
    </div>
  )
}

export default People