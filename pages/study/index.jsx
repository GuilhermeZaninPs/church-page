import Image from "next/image";
import StudiesFile from "@/components/StudiesFile";
import Link from "next/link";

/* import fs from 'fs'

export const getServerSideProps = async ({ res }) => {
  const filePath = `${process.cwd()}/downloads/myfile.pdf`
  const fileContent = await fs.promises.readFile(filePath)

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename=myfile.pdf')
  res.end(fileContent)

  return {
    props: {},
  }
} */

export const Study = () => {
  return (
    <>
      <div className="w-full pb-[4%]">
        <h1 className="text-[26pt] my-[4%] text-center underline-offset-4 underline decoration-[#127369]">
          Estudos bíblicos
        </h1>
        <div className="container mx-auto w-[90%] grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {StudiesFile.map((file) => (
            <div key={file.id} className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  className="rounded-2xl w-[100%] max-h-[38vh]"
                  src={file.img}
                  alt=""
                  width={300}
                  height={100}
                />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {file.name}
                  </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {file.description}
                </p>
                <a
                  target="_blank"
                  href={file.path}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#127369] rounded-lg hover:bg-[#8AA6A3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Faça download
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Study;
