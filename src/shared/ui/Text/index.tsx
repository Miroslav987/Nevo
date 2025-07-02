'use client'

import React from 'react'

import { Typography } from 'antd'

const { Text: AntText } = Typography

type Props = React.ComponentProps<typeof AntText>

export const Text = (props: Props) => {
  return <AntText {...props} />
}
