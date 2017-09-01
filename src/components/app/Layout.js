import {h} from 'preact';
import styled from 'styled-components';
//import Dropdown from 'react-toolbox/lib/dropdown';

const MainDiv = styled.div`
  padding: 15px;
`;

const source = [{},{}]

//How to format the data for the dropdown?
const Layout = props => {
  return (
    <MainDiv>
      {/* <Dropdown
        auto
        onChange={props.handleDropdownChange}
        source={source}
        value={this.props.defaultDropdownValue} />
      Choose your project: 
      {handleProjects(props.projects)} */}
      {
        handleProjects(props.projects)
      }
    </MainDiv>
    );
}

function handleProjects(projects) {
  return (
    <select>
      {projects.map((item, index) => {
        return <option key={index} value={item.name}>{item.name}</option>;
      })}
    </select>);
}

export default Layout;