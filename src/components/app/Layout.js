import {h} from 'preact';
import styled from 'styled-components';
import ProjectDetails from '../ProjectDetails';
//import Dropdown from 'react-toolbox/lib/dropdown';

const MainDiv = styled.div`
  padding: 15px;
`;

//How to format the data for the dropdown?
const Layout = props => {
  return (
    <MainDiv>
      {/* <Dropdown
        auto
        onChange={props.handleDropdownChange}
        source={props.projects}
        value={this.props.defaultDropdownValue} />
      Choose your project: 
      {handleProjects(props.projects)} */}
      {
        renderProjectsDropdown(props.projects, props.onChange)
      }
      {props.chosenProject ? <ProjectDetails project={props.chosenProject} /> : null}
    </MainDiv>
    );
}

function renderProjectsDropdown(projects, onChange) {// Where to pass the chosen project from the dropdown?
  return (
    <select onChange={onChange}>
      {projects.map((item, index) => {
        return <option key={index} value={item.id}>{item.name}</option>;
      })}
    </select>);
}

export default Layout;