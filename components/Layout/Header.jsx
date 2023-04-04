import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { Dropdown } from "flowbite-react";

import styles from "../../styles/Dropdown.module.css"

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  
  return (
    <div>
      <nav className="w-full bg-white-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image src="/logo.png" width={150} height={100} alt="Logo" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-black-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black hover:underline underline-offset-4 decoration-[#127369]">
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.dropdownBtn} /*" dropdown-btn text-black hover:underline underline-offset-4 decoration-[#127369] "*/>
                  <Dropdown label="Sobre nós" className={styles.dropdown}>
                    <Dropdown.Item><Link href="/about">Quem somos</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="#" onClick={() => alert('Está página estará disponível em breve!')}>Desbravadores e Aventureiros</Link></Dropdown.Item>
                    <Dropdown.Item><Link href="contact">Contato</Link></Dropdown.Item>
                    {/* <Dropdown.Item><Link href="">Sign out</Link></Dropdown.Item> */}
                  </Dropdown>
                </li>
                <li className="text-black hover:underline underline-offset-4 decoration-[#127369]">
                  <Link href="/donate">Dízimos e ofertas</Link>
                </li>
                <li className="text-black hover:underline underline-offset-4 decoration-[#127369]">
                  <Link href="/study">Estudos bíblicos</Link>
                </li>
                <li className="text-black hover:underline underline-offset-4 decoration-[#127369]">
                  <Link href="/galery">Galeria</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
