import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import './Home.css'

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  const moveToCharacterInfo = (e) => {
    console.log("clicked")
    navigate(`/character/${e}`);
  };

  const getCharactersList= async () => {
    const response = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )).json()
      setData(response.data.results)
      setIsLoading(false)
  }

  useEffect(() => {
    getCharactersList()
  }, [])


  return(
    (isLoading ? (
      <div>...loading</div>
    ) : (
      <div className='character_list'>
        {data.map((info) => {
          return (
            // <>
            // <div className="action--pannel" onClick={()=>moveToCharacterInfo(info.id)}>
              <Card 
              key={info.id} 
              onClick={() => moveToCharacterInfo(info.id)} 
              name={info.name} 
              image={info.thumbnail?.path + "." + info.thumbnail?.extension} />
            ///* </div>
          // </> */
          )
        })}
      </div>
    ))
  )
}

export default Home;