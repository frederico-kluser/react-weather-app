import ScondaryTextContainer from './styled';

interface ScondaryTextInterface {
  text: string;
}

const ScondaryText = ({text}: ScondaryTextInterface) => <ScondaryTextContainer>{text}</ScondaryTextContainer>

export default ScondaryText;
