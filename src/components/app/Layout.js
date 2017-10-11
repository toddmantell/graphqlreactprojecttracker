import React from 'react';
import styled from 'styled-components';
import ProjectDetails from '../ProjectDetails';
import Header from './Header';

const MainDiv = styled.div`
  padding: 0;
`;

const ProjectsDD = styled.select`
  position: relative;
  top: 50px;
  width: 200px;
  margin: 0 auto;

  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.2);
  curson: pointer;
  outline: none;
  transition: all 0.5s ease-out;

  
  overflow: hidden;
`;

//How to format the data for the dropdown?
const Layout = props => {
  return (
    <MainDiv>
      <Header />
      {
        renderProjectsDropdown(props.projects, props.onChange)
      }
      {props.chosenProject ? <ProjectDetails project={props.chosenProject} /> : null}
    </MainDiv>
    );
}

function renderProjectsDropdown(projects, onChange) {// Where to pass the chosen project from the dropdown?
  return (
    <ProjectsDD onChange={onChange}>
      <option value="0">Choose A Project</option>
      {projects.map((item, index) => {
        return <option key={index} value={item.id}>{item.name}</option>;
      })}
    </ProjectsDD>);
}

export default Layout;