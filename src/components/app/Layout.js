import React from 'react';
import styled from 'styled-components';
import ProjectsDropdown from '../ProjectsDropdown';
import ProjectDetails from '../ProjectDetails';
import NavBar from '../NavBar';

const MainDiv = styled.div`
  padding: 0;
`;

const Layout = props => {  
  return (
    <MainDiv>
      <NavBar />
      <ProjectsDropdown projects={props.projects} onChange={props.onChange} />
      {props.chosenProject ? <ProjectDetails project={props.chosenProject} /> : null}
    </MainDiv>
    );
}

export default Layout;