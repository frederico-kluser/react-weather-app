import { ICONS, IconType } from '../../utils/icons';
import ImageContainer from './styled';


interface ImageInterface {
  icon: IconType;
}

const Image = ({icon}: ImageInterface) => <ImageContainer src={require(`../../assets/icon/${ICONS[icon]}.png`)} />

export default Image;
