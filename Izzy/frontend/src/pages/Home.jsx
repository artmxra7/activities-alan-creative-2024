import { v4 as uuidv4 } from 'uuid';
import Header from '../elements/Header';
import Footer from '../elements/Footer';

const Home = () => {

    return(
        <div>
            <Header/>
            <div className='container-full p-5 mx-auto' style={{backgroundColor: 'rgba(239, 242, 251, 1)'}}>
                <div>Hello</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home