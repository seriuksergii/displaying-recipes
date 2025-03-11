import { GiKnifeFork } from 'react-icons/gi';
import { TbChefHat } from 'react-icons/tb';
import { MdOutlineLocalDining } from 'react-icons/md';
import { CiBowlNoodles } from 'react-icons/ci';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PiChats } from 'react-icons/pi';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="py-10 px-10 bg-[#fff] border-t border-[rgba(0,0,0,.1)]">
        <div className="container">
          <div className="flex items-center justify-center gap-5 border-b border-[rgba(0,0,0,.1)] pb-15">
            <div className="col flex items-center justify-center flex-col group w-[17%]">
              <GiKnifeFork className="text-[40px] transition-all duration-300 group-hover:text-[#d45e15] group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Easy Recipes</h3>
              <p className="text-[13px] font-[500]">For any skill level</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[17%]">
              <TbChefHat className="text-[40px] transition-all duration-300 group-hover:text-[#d45e15] group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Professional Tips</h3>
              <p className="text-[13px] font-[500]">From chefs</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[17%]">
              <MdOutlineLocalDining className="text-[40px] transition-all duration-300 group-hover:text-[#d45e15] group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Quick Cookin</h3>
              <p className="text-[13px] font-[500]">Recipes in 30 minutes</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[17%]">
              <CiBowlNoodles className="text-[40px] transition-all duration-300 group-hover:text-[#d45e15] group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Variety</h3>
              <p className="text-[13px] font-[500]">
                Dishes from around the world
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[17%]">
              <MdOutlineSupportAgent className="text-[40px] transition-all duration-300 group-hover:text-[#d45e15] group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">24/7 Support</h3>
              <p className="text-[13px] font-[500]">Recipe assistanc</p>
            </div>
          </div>

          <div className="footer flex py-15">
            <div className="part1 w-[35%] border-r border-[rgba(0,0,0,.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contacts</h2>
              <p className="text-[14px] font-[500] pb-4">Cooking Master</p>
              <p className="text-[14px] font-[500] pb-4">
                Culinary online resource
              </p>
              <p className="text-[14px] font-[500] pb-4">Kharkiv, Ukrain</p>
              <Link
                className="link font-[500]"
                to="mailto:cookingmaster@gmail.com"
              >
                cookingmaster@gmail.com
              </Link>
              <span className="text-[20px] text-[#d45e15] font-[500] block w-full pt-4">
                +38096-000-00-00
              </span>

              <div className="flex items-center gap-2">
                <PiChats className="text-[40px] text-[#d45e15]" />
                <span className="text-[18px] font-[600] pl-3 pt-4">
                  Culinary
                  <br /> support online
                </span>
              </div>
            </div>
            <div className="part2 w-[45%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Recipes</h2>
                <ul className="list">
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Breakfasts
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Lunches
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Dinners
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Desserts
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Drinks
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Vegetarian dishes
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">
                  About the Resource
                </h2>
                <ul className="list">
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      About Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Our Chefs
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Careers
                    </Link>
                  </li>
                  <li className="list-none text-[14px] font-[500] w-full mb-3">
                    <Link to="/" className="link">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part2 w-[25%] flex pl-8 flex-col pr-8">
              <h2 className="text-[18px] font-[600] mb-4">Subscription</h2>
              <p className="text-[13px] font-[500]">
                Subscribe for new recipes and culinary tips
              </p>

              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border-1 outline-none bg-white pl-2 rounded-sm"
                  placeholder="Enter your email"
                />
                <Button
                  sx={{
                    backgroundColor: '#d45e15',
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '13px',
                    marginTop: '20px',
                    marginBottom: '20px',
                    width: '50%',
                    '&:hover': {
                      backgroundColor: '#b34d12',
                    },
                  }}
                >
                  Subscribe
                </Button>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: '#d45e15',
                          '&.Mui-checked': {
                            color: '#d45e15',
                          },
                        }}
                      />
                    }
                    label="I agree with the terms and conditions"
                  />
                </FormGroup>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottomLine border-t border-[rgba(0,0,0,0.2)] py-3 ">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-1 border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#23b3f5] transition-all duration-300"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />{' '}
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-1 border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#23b3f5] transition-all duration-300"
              >
                <FaYoutube className="text-[15px] group-hover:text-white" />{' '}
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-1 border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#23b3f5] transition-all duration-300"
              >
                <AiFillInstagram className="text-[15px] group-hover:text-white" />{' '}
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border-1 border-[rgba(0,0,0,0.2)] flex items-center justify-center group hover:bg-[#23b3f5] transition-all duration-300"
              >
                <FaTiktok className="text-[15px] group-hover:text-white" />{' '}
              </Link>
            </li>
          </ul>
          <p className="text-[16px] font-[500] text-center">
            Ⓒ 2025 - Cooking Master
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
