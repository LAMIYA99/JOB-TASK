import type { headingTypes } from "../../../Types/global";

const HeadingText = ({ title, desc }: headingTypes) => {
  return (
    <div>
      <div className="mx-auto container  max-w-[1200px] py-[13px]">
        <div className="flex items-center justify-center text-center">
          <div className="flex  items-center pt-[40px]">
            <h2 className="text-[48px] leading-[64px]  font-bold text-[#0c0407]">
              {title}  
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingText;
