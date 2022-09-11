import BackLink from "components/BackLink";



const NotFound = () => {
  const backLinkHref = "/"
  return (
    <main style={{ textAlign: "center" }}>
      <b style={{ fontSize: 64 }}>404</b>
      <p>Sorry, we couldn't find that page :(</p>
      <BackLink to={backLinkHref}>Go to Home</BackLink>
    </main>
  );
};

export default NotFound;