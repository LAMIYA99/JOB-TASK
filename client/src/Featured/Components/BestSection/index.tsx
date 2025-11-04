import HeadingText from "../../Common/HeadingText";
import ProductCard from "../../Common/ProductCards";

const BestSection = () => {
  return (
    <section className="container mx-auto max-w-[1200px] py-[13px]">
      <HeadingText title="Best Sellers" />
      <div className="grid grid-cols-4 gap-5 mt-6 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default BestSection;
