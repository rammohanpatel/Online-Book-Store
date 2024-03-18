import {client} from '../lib/client'
import HeroBanner from '../Components/HeroBanner';
import Product from '../Components/Product';
// import FooterBanner from '../Components/FooterBanner';



function Home({products,bannerData}) {
  // const categories = [...new Set(products.map((product) => product.category))];
  const categories = ['self-help','biography','fiction','adventure','health and fitness','history','sports']


  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {console.log(products)}
    <div className='products-heading'>
      <h2>Best Selling Books</h2>
      <p>We have different genres of books</p>
    </div>
    <div className="products-container">
      {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
      {categories.map((category) => (
          <div key={category}>
            <h3>{category.toUpperCase()}</h3>
            <div className="products-horizontal-scroll">
              {/* <Slider {...sliderSettings}> */}
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <Product key={product._id} product={product} />
                ))}
                {/* </Slider> */}
            </div>
          </div>
        ))}
      
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