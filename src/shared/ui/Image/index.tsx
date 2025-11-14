'use client'

import { FC, useEffect, useState } from 'react'
import { Image, ImageProps } from 'antd'

import fallbackImage from '@shared/imgs/fallback.webp'

import styles from './AppImage.module.scss'

interface ImgProps {
  name: string               
  alt?: string
}

const Img: FC<ImgProps & Omit<ImageProps, 'src'>> = ({
  name,
  alt = 'image',
  preview = false,
  ...props
}) => {
  const [src, setSrc] = useState<string | null>(null)
  // const [loadError, setLoadError] = useState<boolean>(false)

  useEffect(() => {
    let isMounted = true

    const loadImage = async () => {
      try {
        const mod = await import(`@shared/imgs/${name}.webp`)
        if (isMounted) {
          setSrc(mod.default.src ?? mod.default)
        }
      } catch (err) {
        // setLoadError(true)
        setSrc(fallbackImage.src)
      }
    }

    loadImage()

    return () => {
      isMounted = false
    }
  }, [name])

  if (!src) return null

  return (
    <Image
      src={src}
      alt={alt}
      preview={preview}
      fallback={fallbackImage.src}
      className={styles.img}
      {...props}
    />
  )
}

export default Img
