import { Button } from 'antd/lib/radio';
import React from 'react';
import { RightOutlined } from '@ant-design/icons';

interface Props {
  children: React.ReactNode;
}

const N11Button = ({ children, ...props }: Props) => {
  return (
    <Button type="primary" {...props}>
      {children}
      <RightOutlined
        style={{
          color: 'white',
        }}
      />
    </Button>
  );
};

export default N11Button;
