import './card.css'

const Card = (data) => {
    if (!data) {
        console.error('Data is undefined')
        return null
    }
    return (
        <div className='card'>
            <div className='card-front'>
                <img src={data.img} alt="" />
                <div className='overlay'>
                    <div className='text'>{data.name}</div>   
                </div>
                         
            </div>
            <div className='card-back'>
                <ul>
                    {data.statistics.map((item) => <li key={item}>{item}</li> )}
                </ul>
            </div>


        </div>
    )
}
export default Card