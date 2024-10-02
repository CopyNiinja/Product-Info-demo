import Product from "./Product";
import img1 from "./assets/pic-1.jpeg";
import img2 from "./assets/pic-2.jpeg";
import img3 from "./assets/pic-3.jpeg";
function App() {
  // let arr = [{ name: "Basic" }, { name: "Advance" }, { name: "Premium" }];
  let prod = {
    name: "EDIFIER W820NB Plus Wireless Noise Cancellation Over-Ear Headphone",
    price: 7799,
    limit: 0,
    img: [img1, img2, img3],
    offerDate: "Oct 20",
    freeShipping: true,
    discount: 5,
  };

  return (
    <>
      <Product prod={prod} />
    </>
  );
}

export default App;
