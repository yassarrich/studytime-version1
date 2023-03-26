import React from "react"
import { Disclosure } from "@headlessui/react"
const Footer = () => {
    return(
      <>
      <Disclosure as="footer" className="bg-gray-900 lg:text-left">
      <div className="p-4 text-center text-neutral-400">
        © 2023 Copyright:
        <a
          className="text-neutral-400 ml-2"
          href="https://tailwind-elements.com/"
          >Yassar Rich</a
        >
      </div>
    </Disclosure>
      </>
      
    )
}

export default Footer