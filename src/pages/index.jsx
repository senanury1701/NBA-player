import Card from "../components/CardContainer"
import data from '../helper/data.js'
import './index.css'

const Home = () => {
        return (
        <div className="">
        <div className="home-text">
            <h1>NBA Players</h1>            
        </div>

            <div className="home">
                <div className="card-container">
                    { data.map((item, index)=> <Card {...item} key={index}/> )}                   
                </div>
            </div>            
        </div>

    )
}
export default Home