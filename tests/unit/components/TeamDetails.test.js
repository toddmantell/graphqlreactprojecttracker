//@ts-check
import React from 'react';
import {shallow, mount, render} from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import TeamDetails from '../../../src/components/ProjectDetails/TeamDetails';

const fakeTeam = {
  lead: 'Shujaat',
  qa: [],
  developers: []
};

test('Properly processes the array', () => {
  const expected = '';

  const fullyMountedTeamDetails = shallow(<TeamDetails team={fakeTeam} />);

  expect(fullyMountedTeamDetails.find('div').length).toBe(1);
})