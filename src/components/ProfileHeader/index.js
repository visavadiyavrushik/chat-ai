import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Avtar,
  ContactIcon,
  DoenArrowIcon,
  InfoIcon,
  LogoutIcon,
  PricingIcon,
} from "../../assets";
import {
  fetchUserDetails,
  logout,
  resetApp,
} from "../../redux/slices/authSlice";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userDetails) {
      // dispatch(fetchUserDetails());
    }
  }, [dispatch, userDetails]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetApp());
    navigate("/");
  };

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="">
          <div className="flex text-left items-center gap-4">
            <img className="w-10 h-10 rounded" src={Avtar} alt="" />
            <div className="font-medium">
              <div className="text-xl">John Doe</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Pro Trial
              </div>
            </div>
            <DoenArrowIcon />
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-customGreen text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <PricingIcon className="mr-2 h-5 w-5" />
                    Pricing
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-customGreen text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <InfoIcon className="mr-2 h-5 w-5" />
                    FAQ
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-customGreen text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <ContactIcon className="mr-2 h-5 w-5" />
                    Contact Us
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-customGreen text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => handleLogout()}
                  >
                    <LogoutIcon className="mr-2 h-5 w-5" />
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileHeader;
