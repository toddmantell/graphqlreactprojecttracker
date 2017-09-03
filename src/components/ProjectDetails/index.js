import {h} from 'preact';
import styled from 'styled-components';

const projectDetail = styled.span`
  display: block;
`;

const teamDetail = styled.span`
  display: block;
  padding-left: 10px;
`;

const ProjectDetails = ({project}) => {
  return (
    <section>
      <projectDetail>Name: {project.name}</projectDetail>
      <projectDetail>Team:</projectDetail>
      {renderTeamDetails(project)}
    </section>
    );
};

export default ProjectDetails;

function renderTeamDetails(project) {
  return (
    <div>
      <teamDetail>Lead: {project.team.lead}</teamDetail>
      <teamDetail>qa: {project.team.qa}</teamDetail>
      <teamDetail>developers: {project.team.developers}</teamDetail>
    </div>
  );
}

function renderCollectionInline(arrayToRender) {
  return arrayToRender.map((item, index) => {
    return <span key={index}>{item}</span>;
  });
}
