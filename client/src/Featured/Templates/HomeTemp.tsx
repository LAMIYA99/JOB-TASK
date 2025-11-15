import { useState } from "react";
import BannerSection from "../Components/BannerSection";
import CompaniesSection from "../Components/CompaniesSection";
import FeaturedVacanciesSection from "../Components/FeaturedVacanciesSection";
import LatestVacanciesSection from "../Components/LatestVacanciesSection";

const HomeTemp = () => {
  const [filters, setFilters] = useState({
    location: "",
    level: "",
    department: "",
  });
  return (
    <div>
      <BannerSection filters={filters} setFilters={setFilters} />
      <FeaturedVacanciesSection />
      <LatestVacanciesSection filters={filters} />


      <CompaniesSection />
    </div>
  );
};

export default HomeTemp;
