import { useSearchParams } from "react-router-dom";
// import { ProductList } from "../components/ProductList";
import { SearchBox } from "../components/SearchBox";
import { getProducts } from "../fakeAPI";

//! Это импорты из ProductList
import { Link } from "react-router-dom";
import { Container, CardWrapper, ProductName } from "components/ProductList.styled";




export const Products = () => {
    const products = getProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name") ?? "";
    console.log("productName: ", productName);

    const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
    );

    const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
    };

    
    return (
        <main>
            <SearchBox value={productName} onChange={updateQueryString} />
            <Container>
                {/* {products.map((product) => ( */}
                {visibleProducts.map((product) => (
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

