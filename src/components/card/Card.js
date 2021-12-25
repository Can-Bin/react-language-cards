import React from 'react'
import {useState} from 'react'
import './Card.css'

const Card = ({name, img, options}) => {  
    const [info, setInfo] = useState(true)

    const handleClick = () => {
      setInfo(!info)
    } 

    return (
        <div >
                <div className='cards'>
                    <div className='card' key={name} onClick={handleClick}>
                        {info ?

                            (<div className='imgSide'>
                                <img src={img} alt={name} />
                                <h4>{name}</h4>
                            </div> ):
                            (<div>
                                <ul>
                                    {options.map((item, index)=>{
                                        return(                                                    
                                            <li key={index}>{item}</li>
                                       )
                                    })}
                                </ul>
                            </div>)
                        }
                    </div>
                </div>
        </div>
    )
}

export default Card;
