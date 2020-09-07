import Layout from "../../components/layout"
import { useRouter } from "next/router"
// This component creates a dynamic page that receives the slug
function SlugComponent() {
  const router = useRouter()
  //   const {
  //     query: { slug },
  //   } = useRouter()

  console.log(router)
  return (
    <Layout>
      <h2>{router.query.slug}</h2>
    </Layout>
  )
}

export default SlugComponent
