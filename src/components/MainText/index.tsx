import MainTextContainer, { H1, H2, H3 } from './styled';

interface MainTextInterface {
  temperature: number;
  status: string;
  lastUpdate: string;
}

const MainText = ({temperature, status, lastUpdate}: MainTextInterface) => (
  <MainTextContainer>
    <H1>{temperature}°C</H1>
    <H2>{status}</H2>
    <H3>Atualizado {lastUpdate}</H3>
  </MainTextContainer>
)

export default MainText;
