import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react'

const Hader = props =>
<Menu attached='top' inverted size='massive' color='teal'>
<Container>
  <Menu.Item as='a' header>
    NYT Article React Implementation
  </Menu.Item>
</Container>
</Menu>


export default Hader;