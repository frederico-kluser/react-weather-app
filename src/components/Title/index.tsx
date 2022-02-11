import TitleContainer from './styled';

interface TitleInterface {
  text: string;
}

const Title = ({text}: TitleInterface) => (
  <TitleContainer>{text}</TitleContainer>
);

export default Title;
