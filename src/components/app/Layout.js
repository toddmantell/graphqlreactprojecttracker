import {h} from 'preact';
import styled from 'styled-components';

const MainDiv = styled.div`
  padding: 15px;
`;

const Layout = props => {
  return (
    <MainDiv>
      Choose your project: 
      {handleProjects(props.projects)}
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