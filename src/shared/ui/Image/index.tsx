'use client'

import { FC } from 'react'

import { Image, ImageProps } from 'antd'
import { StaticImageData } from 'next/image'

import fallbackImage from '@shared/imgs/fallback.webp'

import styles from './AppImage.module.scss'

interface AppImageProps {
  src?: StaticImageData | string | null
  alt?:string
  
}

const AppImage: FC<AppImageProps & Omit<ImageProps, 'src'>> = ({ src, alt = 'image', preview = false, ...props }) => {
  const normalizedSrc = typeof src === 'string' ? src : src?.src

  return (
    <Image {...props} src={normalizedSrc} preview={preview} fallback={fallbackImage.src} className={styles.appImage} alt={alt} />
  )
}

export default AppImage
