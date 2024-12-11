import importicon from "../Assets/SVG (6).png";
import exporticon from "../Assets/SVG (7).png";
import add from "../Assets/Frame (2).png";
function HeadingSection(){
    return (
<div className="flex justify-between items-center pt-[8cqw] md:pt-[3.2cqw]">
          <div>
            <h1 className="font-jakarta text-[7cqw] md:text-[2.2cqw] text-darkBlue font-[700] tracking-wide">
              Customers
            </h1>
            <div className="flex items-center gap-[6cqw] md:gap-[2cqw] pt-[3cqw] md:pt-[1cqw]">
              <div className="flex items-center gap-[2cqw] md:gap-[0.8cqw]">
                <img src={importicon} alt="import" className="w-[3.5cqw] md:w-[1cqw]" />
                <p className="text-[3.4cqw] md:text-[0.9cqw] text-darkBlue font-inter font-[600]">
                  Import
                </p>
              </div>
              <div className="flex items-center gap-[2cqw] md:gap-[0.8cqw]">
                <img src={exporticon} alt="export" className="w-[3.5cqw] md:w-[1cqw]" />
                <p className="text-[3.4cqw] md:text-[0.9cqw] text-darkBlue font-inter font-[600]">
                  Export
                </p>
              </div>
            </div>
          </div>
          <div className="bg-purple rounded-[0.7cqw] py-[1.8cqw] px-[3.5cqw] md:py-[0.5cqw] md:px-[1.5cqw] flex justify-center items-center gap-[1cqw] md:gap-[0.2cqw]">
            <img src={add} alt="add" className="w-[4cqw] md:w-[1.5cqw]" />
            <p className="text-white text-[3.4cqw] md:text-[0.9cqw] font-inter font-[600]">
              Add
            </p>
          </div>
        </div>
    )
}

export default HeadingSection;