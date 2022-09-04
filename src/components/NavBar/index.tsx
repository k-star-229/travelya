import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from '../Logo';

const Container = styled.div`
  color: red;
  ${tw`
    flex
    h-20
    pl-6
    pr-6
    pt-4
    border-b-2
    border-gray-200
    border-opacity-50
    items-center
    self-center
  `};
`;

const NavItems = tw.ul`
  list-none
  w-full
  h-auto
  lg:h-full
  flex
  lg:ml-20
  justify-center
  items-center
`;

const NavItem = tw.li`
  lg:mr-8
  flex
  items-center
  justify-center
  min-h-full
  text-white
  cursor-pointer
  font-medium
  text-lg
  lg:text-base
  transition-colors
  transition-duration[300ms]
  hover:text-gray-300
  box-content
  mb-2
  lg:mb-0
`;

export function NavBar() {
  return <Container>

    
  </Container>
}