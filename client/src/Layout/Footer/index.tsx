import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FAF9FC] pt-16 pb-8">
      <div className="container mx-auto max-w-[1130px] px-[24px] py-[24px]">
        <div className="grid grid-cols-5 gap-10">
          <div>
            <h3 className="font-semibold text-[16px] mb-4">Main pages</h3>
            <ul className="space-y-3 text-[16px] text-[#484b62]">
              <li>Home (sales)</li>
              <li>Home V1</li>
              <li>Home V2</li>
              <li>Home V3</li>
              <li>Job post V1</li>
              <li>Job post V2</li>
              <li>Job post V3</li>
              <li>Companies V1</li>
              <li>Companies V2</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-[16px] text-[#484b62] mt-8">
              <li>Companies V3</li>
              <li>Company single</li>
              <li>Job category</li>
              <li>Post a job</li>
              <li>Premium job</li>
              <li>Single Job</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-[16px] text-[#484b62] mt-8">
              <li>Blog post</li>
              <li>Blog category</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] mb-4">Utility pages</h3>
            <ul className="space-y-3 text-[16px] text-[#484b62]">
              <li>Sign in</li>
              <li>Sign up</li>
              <li>Landing page</li>
              <li>Forgot password</li>
              <li>Email confirmation</li>
              <li>Terms & condition</li>
              <li>Coming soon</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[16px] mb-4">Template pages</h3>
            <ul className="space-y-3 text-[16px] text-[#484b62]">
              <li>Start here</li>
              <li>Style guide</li>
              <li>404 Not found</li>
              <li>Password protected</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>
                <a href="#" className="font-semibold underline text-black">
                  More Webflow Templates
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col  gap-5">
            <img
              className="w-[145px]"
              src="https://cdn.prod.website-files.com/6499e85e700d7e4fd7af113d/6499f8accd5a665370c31806_logo-web-jobboardly-x-webflow-template.svg"
              alt=""
            />
            <p className="text-[16px] text-[#484b62]">
              Copyright © JobBoardly X | Designed by <br /> BRIX Templates –
              Powered by Webflow
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md px-6 py-5 flex flex-col  gap-6 justify-between w-full max-w-[453px]">
            <div className="flex justify-between">
              <p className="font-semibold text-sm text-gray-900 mb-3 sm:mb-0">
                Subscribe to our newsletter!
              </p>
              <ul className="flex items-center gap-2">
                <li>
                  <Facebook size={17} fill="black" className="text-black" />
                </li>
                <li>
                  <Twitter size={17} fill="black" className="text-black" />
                </li>
                <li>
                  <Instagram size={17} className="text-black" />
                </li>
                <li>
                  <Linkedin size={17} fill="black" className="text-black" />
                </li>
                <li>
                  <Youtube size={17} className="text-black" />
                </li>
              </ul>
            </div>

            <div className="flex items-center w-full sm:w-auto mb-3 sm:mb-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-l-md px-3 py-2 text-sm outline-none w-full sm:w-76"
              />
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
