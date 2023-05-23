import './Card.css'

const Card = ({ name, image, onClick}) => {
  const test = onClick  


  return (
    <div className='card--container' onClick={test} >
      <div className="card--wrapper">
        <div className="card--name">
          <h3>{name}</h3>
        </div>
        <div className="card--image">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  )
}

export default Card