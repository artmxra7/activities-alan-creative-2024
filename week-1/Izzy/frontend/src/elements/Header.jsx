import { v4 as uuidv4 } from 'uuid';
import Carroussel from './Carousel';
import Card from './Card';

const Header = () => {
    let Image = [
        {
            key: uuidv4(),
            content: (<Card image={"https://openasset.com/wp-content/uploads/2023/12/broken-image-icon.png"} />),
        },
        {
            key: uuidv4(),
            content: (<Card image={"https://computersolve.com/wp-content/uploads/2022/02/ed687504b91662ce8d424d116adb16b7.jpg"} />),
        },
        {
            key: uuidv4(),
            content: (<Card image={"https://openasset.com/wp-content/uploads/2023/12/broken-image-icon.png"} />),
        }
    ]

    return(
        <div className='container mx-auto mt-5' style={{width: '70%', height: '600px'}}>
        <Carroussel 
        cards={Image} 
        width="100%" 
        height="600px"
        margin="0 auto"
        offset={2}
        showArrows={false} /> 
        </div>
    )
}

export default Header