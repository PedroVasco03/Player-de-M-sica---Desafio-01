import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "./global.css"
import Player from './Home/components/Player';
const Home = () =>{
    const sogs =[
        '/assets/music/s1.mp3',
        '/assets/music/s2.mp3',
        '/assets/music/s3.mp3',
    ]
    return(
        <>
        <Player songs={sogs}/>
        </>
    )
}

export default Home;