import ButtonContainer, { Icon } from './styled';
import "./style.css";

interface ButtonInterface {
  isLoading: boolean;
}

const Button = ({isLoading}: ButtonInterface) => (
  <ButtonContainer id="Button" isLoading={isLoading}>
    {!isLoading && <Icon className='icon' src={require('../../assets/icon.png')} />}
    <Icon className={isLoading ? '' : 'animation'} src={require('../../assets/gif.gif')} />
    Realoading
  </ButtonContainer>
);

export default Button;
