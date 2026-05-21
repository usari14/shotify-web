export default function LogoCloud() {
  const brands = ['STORE', 'MERCHANT', 'SELLER', 'BRAND', 'SHOP', 'COMMERCE'];

  return (
    <section className="py-12 bg-white border-b border-[#e8e5e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-[#9a9aaa] uppercase tracking-widest mb-8">
          Trusted by Shopify merchants worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg font-extrabold text-[#d4d4d8] tracking-wide"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}