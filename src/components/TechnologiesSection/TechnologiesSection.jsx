import data from 'data/technologies.json';
import { TechList, TechnoligiesWrap } from './TechnologiesSection.styled';
import { TechnologiesItem } from 'components/TechnologiesItem/TechnologiesItem';

export const TechnologiesSection = () => {
  return (
    <TechnoligiesWrap>
      <TechList>
        {data.technologies.map(({ id, title, link, logo }) => (
          <TechnologiesItem key={id} title={title} link={link} logo={logo} />
        ))}
      </TechList>
    </TechnoligiesWrap>
  );
};
