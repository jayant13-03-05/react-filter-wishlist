import Header from "../components/header";
import { WishlistProvider } from "../context/WishlistContext";
import ProductList from "../components/ProductList";

export default function HomePage() {
return (
     <>
<WishlistProvider>
    <Header/>
<ProductList />

</WishlistProvider>
</>
);
}