import { useRouter } from 'next/router'
import PageLayout from '../../components/PageLayout'

export default () => {
  const router = useRouter()

  return (
    <PageLayout>
      <h1>Game Room</h1>
      <p>*not party owner edition* (aka i joined from a url someone sent me)</p>
      <p>room id: {router.query.id}</p>
    </PageLayout>
  )
}