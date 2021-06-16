import Base from 'templates/Base'
import Loader from 'components/Loader'

export interface PageProps {
  loading: boolean
}

const Home = ({ loading }: PageProps) => {
  return (
    <Base>
      <Loader loading={loading} />
    </Base>
  )
}

export default Home
