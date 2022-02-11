import ButtonContainer, { Icon } from './styled';
import "./style.css";

interface ButtonInterface {
  isLoading: boolean;
  onClick: () => void;
}

const Button = ({isLoading, onClick}: ButtonInterface) => (
  <ButtonContainer id="Button" isLoading={isLoading} onClick={onClick}>
    {!isLoading && <Icon className='icon' src={require('../../assets/icon.png')} />}
    <Icon className={isLoading ? '' : 'animation'} src={require('../../assets/gif.gif')} />
    {isLoading ? 'Reloading' : 'Reload' }
  </ButtonContainer>
);

export default Button;
