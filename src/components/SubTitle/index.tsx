import SubTitleContainer from './styled';

interface SubTitleInterface {
  text: string;
}

const SubTitle = ({text}: SubTitleInterface) => (
  <SubTitleContainer>{text}</SubTitleContainer>
);

export default SubTitle;
