import styled from "styled-components";
import tw from "twin.macro";
import { Element } from 'react-scroll';

const ExploreSectionConatainer = tw(Element)`
  w-full
  h-screen
  flex
  flex-col
  relative
  pt-1
  pb-1
  xl:pt-2
  xl:pb-2
  items-center
`;

const Title = tw.h1`
  text-2xl
  xl:text-3xl
  2xl:text-5xl
  2xl:mt-6
  2xl:mb-6
  text-gray-800
  font-bold
  text-center
`;

const SectionInfo = tw.p`
  text-base
  2xl:text-lg
  text-gray-700
  text-center
  mt-4
  2xl:mt-2
  max-w-lg
  xl:max-w-3xl
`;

const ExploreSectionWrapper = tw.div`
  w-full
  h-full
  flex
  flex-col
  justify-center
  items-center
  mt-3
  xl:mt-6
  2xl:mt-10
  max-w-sm
  xl:max-w-3xl
  2xl:max-w-5xl
`;

const Item = styled.div`
  ${tw`
    flex
    flex-col
  `};

  img {
    ${tw`
      max-w-full
      max-h-full
    `}
  }
`;

const Description = tw.p`
  text-gray-300
  text-center
  bg-black
  bottom-10
  left-1/2
  px-4
  py-2
  rounded-2xl
  opacity-80
  transform[translateX(-50%)]
  absolute
`;

export function ExploreSection() {
  return (
    <ExploreSectionConatainer name='Explore'>
      <Title>Explore Travel Places</Title>
    </ExploreSectionConatainer>
  )
}