import { Affix } from 'antd';
import React, { useState } from 'react';
import { Component as Logo } from 'https://n11scdn.akamaized.net/a1/org/21/04/01/67/61/13/35/59/54/78/68/68/62194584164326158720.svg';
interface Props {}

const Header = (props: Props) => {
  const [top, setTop] = useState(0);

  return (
    <>
      <Affix offsetTop={top}>{Logo}</Affix>
    </>
  );
};

export default Header;
