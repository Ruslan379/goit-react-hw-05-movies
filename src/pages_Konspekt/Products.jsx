import { useSearchParams } from "react-router-dom";
// import { ProductList } from "../components/ProductList";
import { SearchBox } from "../components/Searchbar";
import { getProducts } from "../fakeAPI";

//! Это импорты из ProductList
import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, ProductName } from "components/BackLink.styled";




const Products = () => {
    const products = getProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const productName = searchParams.get("name") ?? "";
    console.log("productName: ", productName);

    const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
    );

    const updateQueryString = (name) => {
        const nextParams = name !== ""
            ? { name }
            : {}; //! удаление параметра name, если значение поля ввода это пустая строка.
        setSearchParams(nextParams);
    };

    const location = useLocation();

    
    return (
        <main>
            <SearchBox value={productName} onChange={updateQueryString} />
            <Container>
                {/* {products.map((product) => ( //todo OLD-1 */ }
                {visibleProducts.map((product) => (
                    <CardWrapper key={product.id}>
                        {/* <Link to={`${product.id}`}> //todo OLD-2 */}
                        <Link to={`${product.id}`} state={{ from: location }}>
                            <img src="https://via.placeholder.com/200x100" alt="" />
                            <ProductName>{product.name}</ProductName>
                        </Link>
                    </CardWrapper>
                ))}
            </Container>
        </main>
    );
};

export default Products;

//todo OLD-1
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

