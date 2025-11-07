import BannerSection from "../Components/BannerSection";
import CompaniesSection from "../Components/CompaniesSection";
import FeaturedVacanciesSection from "../Components/FeaturedVacanciesSection";
import LatestVacanciesSection from "../Components/LatestVacanciesSection";


const HomeTemp = () => {
  return (
    <div>
      <BannerSection/>
      <FeaturedVacanciesSection/>
      <LatestVacanciesSection/>
      <CompaniesSection/>
    </div>
  );
};

export default HomeTemp;
