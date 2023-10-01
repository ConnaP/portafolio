"use client";

import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer container>
      <div className="w-full">
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Constanza Palavecino" href="#" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://github.com/ConnaP" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com/in/constanza-andrea-palavecino-neira-50ba9413b" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
