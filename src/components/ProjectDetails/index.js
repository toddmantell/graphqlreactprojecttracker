import {h} from 'preact';
import styled from 'styled-components';

const ProjectDetail = styled.span`
  display: block;
`;

const TeamDetail = styled.span`
  display: block;
  padding-left: 10px;
`;

const ProjectDetails = ({project}) => {
  return (
    <section>
      <ProjectDetail>Name: {project.name}</ProjectDetail>
      <ProjectDetail>Team:</ProjectDetail>
      {renderTeamDetails(project)}
    </section>
    );
};

export default ProjectDetails;

function renderTeamDetails(project) {
  return (
    <div>
      <TeamDetail>Lead: {project.team.lead}</TeamDetail>
      <TeamDetail>QA: {project.team.qa}</TeamDetail>
      <TeamDetail>Developers: {project.team.developers}</TeamDetail>
    </div>
  );
}

function renderCollectionInline(arrayToRender) {
  return arrayToRender.map((item, index) => {
    return <span key={index}>{item}</span>;
  });
}
