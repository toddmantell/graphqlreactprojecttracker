import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  margin-top: 20px;
  border: 1px solid;
  border-radius: 1px;
  float: left;
  overflow: auto;
`;

const ProjectDetail = styled.span`
  display: block;
`;

const TeamDetail = styled.div`
  padding-left: 10px;
  font-weight: bold;
`;

const ProjectDetails = ({project}) => {
  return (
    <ProjectsSection>
      <ProjectDetail>Project: {project.name}</ProjectDetail>
      <ProjectDetail>Team:</ProjectDetail>
      {renderTeamDetails(project)}
    </ProjectsSection>
    );
};

export default ProjectDetails;

function renderTeamDetails(project) {
  return (
    <div>
      <TeamDetail>Lead: {project.team.lead}</TeamDetail>
      <TeamDetail>QA: {renderCollectionInline(project.team.qa)}</TeamDetail>
      <TeamDetail>Developers: {renderCollectionInline(project.team.developers)}</TeamDetail>
    </div>
  );
}

function renderCollectionInline(arrayToRender) {
  return arrayToRender.map((item, index) => {
    return <span key={index}>{index === (arrayToRender.length - 1) ? `${item}` : `${item}, ` }</span>;
  });
}
