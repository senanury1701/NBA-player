import './card.css';
import  { useState } from 'react';

const Card = (data) => {
    const [show, setShow] = useState(false);

    const visibility = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <div className='card' onClick={visibility}>
            {show ? (
                <div className='card-back'>
                    <ul>
                        {data.statistics.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='card-front'>
                    <img src={data.img} alt="" />
                    <div className='overlay'>
                        <div className='text'>{data.name}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;