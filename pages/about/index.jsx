import Image from "next/image";

export const About = () => {
  return (
    <>
      <div className="max-w-full px-[30px] mb-[5%] mt-[20px]">
        <h1 className="text-[26pt] mb-[4%] text-center underline-offset-4 underline decoration-[#127369]">Sobre nós</h1>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2">
          <Image
            className="rounded-lg shadow-lg"
            src="/imgTest.jpg"
            width={500}
            height={100}
            alt="About image"
          />
          <div className="max-w-[90%] text-[13.5pt] text-left">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              voluptatum deserunt odio atque harum. Temporibus ipsam iusto
              repellat dicta, a delectus quaerat? Iusto impedit dolor eligendi
              necessitatibus vero, quisquam tempora! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda ex optio vero cum delectus
              deserunt illum fugiat tenetur error eum, quisquam id ratione
              voluptatum ut repellat quaerat at est placeat! Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Exercitationem officiis
              adipisci unde incidunt vel dolorum eos ipsum dicta harum hic,
              neque veniam repellendus error optio accusantium ad, eveniet autem
              minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam molestias similique laudantium. Ipsum, nisi. Aspernatur
              quis dignissimos exercitationem est. Necessitatibus, explicabo
              dolor laudantium voluptate debitis optio veniam rem architecto
              quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae eum numquam rerum aut ipsa hic illo autem aspernatur enim.
              Asperiores natus similique accusamus, qui consequatur hic expedita
              cum nemo neque.
            </p>
          </div>
        </div>

        <div className="w-full mt-[2%]">
          <h1 className="text-[26pt] my-[4%] text-center underline-offset-4 underline decoration-[#127369]">Nossos líderes</h1>
          <div className=" grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <div className="w-full max-w-xs bg-white ">
              <div className="flex flex-col items-center py-10 rounded-lg shadow-lg">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/imgTest.jpg"
                  width={400}
                  height={100}
                  alt="About image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Fabrício Guimarães
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pastor
                </span>
                <div className="flex flex-col mt-4 space-x-3 md:mt-6">
                  {/* <span className="items-center px-4 py-2 mb-3 text-sm font-medium text-center text-white bg-[#127369] rounded-lg">
                    +55 777 777 7777
                  </span> */}
                  <span className="items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#127369] border border-gray-300 rounded-lg">
                    emaildopastor@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-xs bg-white ">
              <div className="flex flex-col items-center py-10 rounded-lg shadow-lg">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/imgTest.jpg"
                  width={400}
                  height={100}
                  alt="About image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Flávia Costa
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Anciã
                </span>
                
              </div>
            </div>
            <div className="w-full max-w-xs bg-white ">
              <div className="flex flex-col items-center py-10 rounded-lg shadow-lg">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/imgTest.jpg"
                  width={400}
                  height={100}
                  alt="About image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Paulo Westphal
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Ancião
                </span>
                
              </div>
            </div>
            <div className="w-full max-w-xs bg-white ">
              <div className="flex flex-col items-center py-10 rounded-lg shadow-lg">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/imgTest.jpg"
                  width={400}
                  height={100}
                  alt="About image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Isa Senna
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Anciã
                </span>
                
              </div>
            </div>
            <div className="w-full max-w-xs bg-white ">
              <div className="flex flex-col items-center py-10 rounded-lg shadow-lg">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/imgTest.jpg"
                  width={400}
                  height={100}
                  alt="About image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Cíntia Rabaneda
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Secretária
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
