import { Parallax } from 'react-parallax';
import ParallaxImage from 'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fperfil_daniel_ramirez_rivera.png?alt=media&token=ea66b280-97a1-4e5d-ac2b-0791118d771f';

const ImageOne = () => (
    <Parallax className='image' bgImage={ParallaxImage} bgImageAlt="the cat" strength={800}>
        
    </Parallax>
);

export default ImageOne;