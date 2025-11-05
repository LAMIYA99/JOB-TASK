const BannerSection = () => {
  return (
<section>
  <div className="relative">
    <img
      src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/64b81629734341007a808e9d_home-v1-hero-bg-jobboardly-webflow-ecommerce-template.jpg"
      alt=""
      className="w-full h-[441px] object-cover"
    />
    <div className="absolute inset-0 container mx-auto max-w-[1130px] px-[24px] py-[24px] flex items-center">
      <div className="flex flex-col gap-4 items-start justify-center">
        <h2 className="text-[#376fff] text-[13px] font-bold leading-4 tracking-[1.04px] uppercase">
          Best tech jobs
        </h2>
        <h3 className="text-[36px] leading-[48px] font-semibold text-[#232535]">
          Find your perfect job <br /> in the tech industry
        </h3>
        <p className="text-[16px] text-[#484b62] font-normal leading-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed
          do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <ul className="flex gap-6 items-center">
          <li>
            <img
              src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6554fdc25133d9e05e8b9598_agency-logo-jobboardly-x-webflow-template.svg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6554fdc21156accfcc02b5ce_application-logo-jobboardly-x-webflow-template.svg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6554fdc266e7a7d51cee299d_business-logo-jobboardly-x-webflow-template.svg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6554fdc267ffa27d36afed80_company-logo-jobboardly-x-webflow-template.svg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
};

export default BannerSection;
