import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import './Character.css'

const Character = () => {
  const data = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [info, setInfo] = useState({})
  const drawEventList = (target) => {
    return(
      <div key={target}>
      <h2>{target}</h2>
        <ul>
          {info[target]?.items.map((item) => {
            return <li key={item.resourceURI}>{item.name}</li>
          })}
        </ul>
    </div>
    )
  }


  const getCharacterInfo = async () => {
    const response = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${data.id}`)
      ).json()
    setInfo(...response.data.results)
    setIsLoading(true)
  }

  useEffect(() => {
    getCharacterInfo()
  }, [])



    return ( !isLoading ? 
      ( <div>...Loading</div> ) 
      : (
    <div>
      <div className="character__info--main">
        <div className="info--main__textbox">
          <h1>{info.name}</h1>
          {info.description === "" ? <p>No description</p> : null}
        </div>
        <img src={info.thumbnail?.path + "." + info.thumbnail?.extension} alt={info.name} />
      </div>
      <div className="character__info--sub">
        {['events', 'comics', 'series'].map((target) => drawEventList(target))}
      </div>
    </div>
    ));
  };
  
export default Character;