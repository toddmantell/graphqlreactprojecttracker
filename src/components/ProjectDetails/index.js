import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TeamDetails from './TeamDetails';

const ProjectsSection = styled.section`
  position: relative;
  margin: 75px 0 0 32%;
  padding: 10px;
  
  width: 325px;
  border-radius: 2px;
  background-color: lightgoldenrodyellow;
  box-shadow: 1px 1px 3px 0px rgba(50, 50, 50, 0.57);

`;

const ProjectDetail = styled.span`
  display: block;
`;

const ProjectDetails = ({project}) => {
  return (
    <ProjectsSection>
      <ProjectDetail>Project: {project.name}</ProjectDetail>
      <ProjectDetail>Team:</ProjectDetail>
        <TeamDetails team={project.team} />
    </ProjectsSection>
    );
};

export default ProjectDetails;

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired
};
