import ButtonContainer, { Icon } from './styled';
import "./style.css";

const Button = () => (
  <ButtonContainer id="Button">
    <Icon className='icon' src={require('../../assets/icon.png')} />
    <Icon className='animation' src={require('../../assets/gif.gif')} />
    Realoading
  </ButtonContainer>
);

export default Button;
