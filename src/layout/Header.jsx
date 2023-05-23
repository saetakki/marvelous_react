import { useParams, useNavigate} from "react-router-dom";
import MarvelLogo from '../assets/marvel.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const location = useParams()
  const onLogoClick = () => {
    navigate('/')
  }


  return (
    (location.id === undefined ?
    (
    <div className="header--container" onClick={onLogoClick}>
      <div className='header--wrapper'>
        <img src={MarvelLogo} alt="Marvel Logo" />
      </div>
    </div>
    )
    : 
    <div className="header--container" onClick={onLogoClick}>
      <button className="go-back" onClick={()=>navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className='header--wrapper'>
        <img src={MarvelLogo} alt="Marvel Logo" />
      </div>
    </div>
    ))

}

export default Header