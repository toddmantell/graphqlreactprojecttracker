import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TeamDetailsDiv = styled.div`
  margin: auto;
`;

const TeamMembers = styled.div`
padding-left: 10px;
font-weight: bold;
`;

const TeamDetails = ({team}) => {
  console.log('team', team);
  return (
    <TeamDetailsDiv>
      <TeamMembers>Lead: {team.lead}</TeamMembers>
      <TeamMembers>QA: {renderCollectionInline(team.qa)}</TeamMembers>
      <TeamMembers>Developers: {renderCollectionInline(team.developers)}</TeamMembers>
    </TeamDetailsDiv>
  );
}

TeamDetails.propTypes = {
  team: PropTypes.shape({
    lead: PropTypes.string,
    qa: PropTypes.arrayOf(PropTypes.string),
    developers: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default TeamDetails;

function renderCollectionInline(arrayToRender) {
  return arrayToRender.map((item, index) => {
    return <span key={index}>{index === (arrayToRender.length - 1) ? `${item}` : `${item}, ` }</span>;
  });
}