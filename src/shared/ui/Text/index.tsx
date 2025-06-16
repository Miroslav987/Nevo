'use client';

import { Typography } from 'antd';
import React from 'react';

const { Text: AntText } = Typography;

type Props = React.ComponentProps<typeof AntText>;

export const Text = (props: Props) => {
  return <AntText {...props}  />;
};
