import {client} from '../lib/client'
import HeroBanner from '../Components/HeroBanner';
import Product from '../Components/Product';
// import FooterBanner from '../Components/FooterBanner';


function Home({products,bannerData}) {

  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className='products-heading'>
      <h2>Best Selling Books</h2>
      <p>We have different genres of books</p>
    </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  )
}



export async function getServerSideProps() {
  const products = await client.fetch(`*[_type == "product"]`);

  const bannerData = await client.fetch(`*[_type == "banner"]`);

 return {
    props: {
      products,
      bannerData,
    }
  };
}

export default Home;