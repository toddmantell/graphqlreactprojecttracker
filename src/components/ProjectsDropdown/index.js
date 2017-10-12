import React from 'react';
import styled from 'styled-components';

const DropdownDiv = styled.div`
  position: relative;
  top: 50px;
  margin-left: 40%;
`;

const ProjectsDD = styled.select`
  width: 200px;
  margin: 0 auto;

  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.2);
  cursor: pointer;
  outline: none;
  transition: all 0.5s ease-out;

  overflow: hidden;
`;

const ProjectsDropdown = ({projects, onChange}) => {
  return (
    <DropdownDiv>
      <ProjectsDD onChange={onChange}>
        <option value="0">Choose A Project</option>
        {projects.map((item, index) => {
          return <option key={index} value={item.id}>{item.name}</option>;
        })}
      </ProjectsDD>
    </DropdownDiv>);
}
 
export default ProjectsDropdown;