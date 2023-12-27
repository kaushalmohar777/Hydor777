// import { request, gql } from "graphql-request";
// import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const SliderCard = () => {
  




  // const [productData, setProductData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const graphqlEndpoint = 'https://0f3d49.myshopify.com/api/2023-12/graphql.json';
  //     const accessToken = 'f06aedcf11ba46797bec07aa0cd9467b';

  //     const graphqlQuery = `
  //       {
  //         product(id: "gid://shopify/Product/8893067493673") {
  //           id
  //           title
  //           description
  //           featuredImage {
  //             id
  //             url
  //           }
  //         }
  //       }
    //   `;

    //   try {
    //     const response = await fetch(graphqlEndpoint, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'X-Shopify-Storefront-Access-Token': accessToken,
    //       },
    //       body: JSON.stringify({ query: graphqlQuery }),
    //     });

    //     if (!response.ok) {
    //       throw new Error(`GraphQL request failed with status ${response.status}`);
    //     }

    //     const data = await response.json();
    //     console.log(data);
    //     const fetchedProductData = data.data.product;
    //     setProductData(fetchedProductData);
    //   } catch (error) {
    //     console.error('GraphQL request failed', error);
    //   }
    // };

    // fetchData();
  // }, []);
  






const graphqlEndpoint = 'https://0f3d49.myshopify.com/api/2023-12/graphql.json';
const accessToken = 'f06aedcf11ba46797bec07aa0cd9467b';


const graphqlQuery = `
{
  product(id: "gid://shopify/Product/8893067493673") {
    id
    title
    description
    featuredImage {
      id
      url
    }
  }
}
`;

fetch(graphqlEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': accessToken,
  },
  body: JSON.stringify({ query: graphqlQuery }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`GraphQL request failed with status ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('GraphQL request failed', error);
  });




  return (
    <div className='slider-component'>
        <h2>SliderCard</h2>
    <Swiper
       modules={[Pagination]}
       spaceBetween={30}
       slidesPerView={3}
       pagination={{ clickable: true }}
       className='mySwiper'
     >
      <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0844/9353/3481/files/card-img1.avif?v=1702562184" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0844/9353/3481/files/card-img1.avif?v=1702562184" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0844/9353/3481/files/card-img1.avif?v=1702562184" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.shopify.com/s/files/1/0844/9353/3481/files/card-img1.avif?v=1702562184" /></SwiperSlide>
    </Swiper>


{/* <div>
      {productData ? (
        <div>
          <h2>{productData.title}</h2>
          <p>{productData.description}</p>
          {productData.featuredImage && (
            <img src={productData.featuredImage.url} alt={productData.title} />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div> */}


    </div>
  )
}

export default SliderCard;