// import { ProductList } from "../components/ProductList";
import { getProducts } from "../fakeAPI";

import { Link } from "react-router-dom";
import { Container, CardWrapper, ProductName } from "components/ProductList.styled";

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <Container>
            {products.map((product) => (
                <CardWrapper key={product.id}>
                    <Link to={`${product.id}`}>
                        <img src="https://via.placeholder.com/200x100" alt="" />
                        <ProductName>{product.name}</ProductName>
                    </Link>
                </CardWrapper>
            ))}
        </Container>
    </main>
  );
};



//todo OLD
// import { ProductList } from "../components/ProductList";
// import { getProducts } from "../fakeAPI";

// export const Products = () => {
//   const products = getProducts();
//   return (
//     <main>
//       <ProductList products={products} />
//     </main>
//   );
// };

