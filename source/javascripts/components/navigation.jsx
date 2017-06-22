import React from 'react';

const NavItem = (props) => {
  return (
    <a href={props.url} className="menu-item" onClick={() => {console.log(props.title)}}>{props.title}</a>
  );
};

class Navigation extends React.Component {
  render () {
    return(
      <nav className="menu">
        <NavItem title="Typography" url="#typography" />
        <NavItem title="Colours" url="#colours" />
      </nav>
    );
  }
}

export default Navigation;
