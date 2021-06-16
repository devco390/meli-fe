import ContentLoader from 'react-content-loader'

export type SkeletonTypes = 'card' | 'image' | 'detail'

export type SkeletonProps = {
  type: SkeletonTypes
  marginBottom?: string
  elementBackgroundColor?: string
  contentBackgroundColor?: string
}

const Skeleton = ({
  type,
  contentBackgroundColor = '#ffffff',
  elementBackgroundColor = '#dddddd',
  marginBottom = '0xp'
}: SkeletonProps) => {
  const CardTemplate = () => {
    return (
      <ContentLoader
        width="100%"
        height="169px"
        role={'skeleton-card'}
        uniqueKey={'skeleton-card'}
        backgroundColor={elementBackgroundColor}
        style={{ backgroundColor: contentBackgroundColor, marginBottom }}
      >
        <rect x="0" y="0" rx="5" ry="5" width="192" height="100%" />
        <rect x="216" y="16" rx="4" ry="4" width="182" height="16" />
        <rect x="216" y="48" rx="3" ry="3" width="474" height="16" />
        <rect x="216" y="121" rx="3" ry="3" width="317" height="16" />
      </ContentLoader>
    )
  }

  const DetailTemplate = () => {
    return (
      <ContentLoader
        width="100%"
        height="114px"
        role={'skeleton-detail'}
        uniqueKey={'skeleton-detail'}
        backgroundColor={elementBackgroundColor}
        style={{ backgroundColor: contentBackgroundColor, marginBottom }}
      >
        <rect x="16" y="16" rx="4" ry="4" width="182" height="16" />
        <rect x="16" y="48" rx="3" ry="3" width="474" height="16" />
        <rect x="16" y="121" rx="3" ry="3" width="317" height="16" />
      </ContentLoader>
    )
  }

  const ImageTemplate = () => {
    return (
      <ContentLoader
        width="100%"
        height="100%"
        backgroundColor={elementBackgroundColor}
        style={{
          backgroundColor: contentBackgroundColor,
          marginBottom,
          zIndex: 20
        }}
        role={'skeleton-image'}
        uniqueKey={'skeleton-image'}
      >
        <rect width="100%" height="100%" x="0" y="0" />
      </ContentLoader>
    )
  }

  return (
    <>
      {type === 'card' && <CardTemplate />}
      {type === 'image' && <ImageTemplate />}
      {type === 'detail' && <DetailTemplate />}
    </>
  )
}

export default Skeleton
