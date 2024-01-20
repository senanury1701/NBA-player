import Card from "../components/CardContainer"
import data from '../helper/data.js'
import './index.css'

const Home = () => {
        return (
        <div >
            <h1>NBA Players</h1>
            <div className="home">
                { data.map((item, index)=> <Card {...item} key={index}/> )}                   
            </div>
        </div>
    )
}
export default Home