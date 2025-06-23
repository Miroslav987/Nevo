"use client"
import fallbackImage from '@shared/imgs/fallback.webp'
import { FC } from 'react'
import { Image, ImageProps } from 'antd'
import { StaticImageData } from 'next/image'
import styles from './AppImage.module.scss'

interface AppImageProps {
  src?: StaticImageData | string |null
}

const AppImage: FC<AppImageProps & Omit<ImageProps, 'src'>> = ({
  src,
  preview = false,
  ...props
}) => {
  const normalizedSrc = typeof src === 'string' ? src : src?.src

  return (
    <Image
      {...props}
      src={normalizedSrc}
      preview={preview}
      fallback={fallbackImage.src}
      className={styles.appImage}
    />
  )
}

export default AppImage
