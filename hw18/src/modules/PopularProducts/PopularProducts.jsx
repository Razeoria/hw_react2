/** @jsxImportSource @emotion/react */

import Container from "../layouts/Container/Container";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import ProductCard from "../../shared/components/ProductCard/ProductCard";

import useFetch from "../../shared/hooks/useFetch";
import { getPopularProducts } from "../../shared/api/products-api";

import { popularProductsStyle, productListStyle } from "./styles";

const PopularProducts = () => {
  const { data: products, loading, error } = useFetch({
    request: getPopularProducts,
    initialData: [],
  });

  return (
    <section css={popularProductsStyle}>
      <Container>
        <SectionTitle title="Популярные товары" />
        {loading && <Loader loading={true} />}
        {!!error && <LoadingError>{error}</LoadingError>}
        {products.length > 0 && (
          <div css={productListStyle}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default PopularProducts;

