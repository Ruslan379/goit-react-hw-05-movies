import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container, Header, Link } from "components/SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Suspense fallback={null}>
            {/* <Suspense fallback={<div>Loading page...</div>}> */}
                <Outlet />
            </Suspense>
        </Container>
    );
};