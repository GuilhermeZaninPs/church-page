export const Donate = () => {
  return (
    <>
      <div>
        <h1 className="text-[26pt] my-[4%] text-center underline-offset-4 underline decoration-[#127369]">
          Dízimos e ofertas
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-[80%] md:w-1/2 flex flex-col text-center">
            <h3 className="text-[20pt] mb-[4%] font-medium">
              Transferência bancária
            </h3>
            <div>
              <span>Bank Name:</span>
              <span className="underline-offset-4 underline decoration-[#127369] ml-[5px]">
                {" "}
                HSBC UK BANK PLC
              </span>
            </div>
            <div>
              <span>Account Name:</span>
              <span className="underline-offset-4 underline decoration-[#127369] ml-[5px]">
                {" "}
                SDA OXFORD PORTU
              </span>
            </div>
            <div>
              <span>Sort code:</span>
              <span className="underline-offset-4 underline decoration-[#127369] ml-[5px]">
                {" "}
                40-45-27
              </span>
            </div>
            <div>
              <span>Bank account:</span>
              <span className="underline-offset-4 underline decoration-[#127369] ml-[5px]">
                {" "}
                51743902
              </span>
            </div>
          </div>
          <div className="border border-gray-400 md:h-64 md:w-px md:my-[0] md:mx-[30px]"></div>
          <div className="w-[80%] my-[4%] md:w-1/2 flex flex-col items-center mb-[4%]">
            <h3 className="text-[20pt] mb-[4%] font-medium">Presencialmente</h3>
            <span className="w-[90%] text-center">
              Summertown Church Hall, Portland Rd, Summertown, Oxford OX2 7EZ
            </span>
            <span className="items-center max-w-[200px] px-4 py-2 my-3 text-sm font-medium text-center text-white bg-[#127369] rounded-lg">
              <a
                href="https://www.google.com/maps/place/St+Michaels+Church+Hall/@51.7797821,-1.2656631,18.25z/data=!4m6!3m5!1s0x4876c41316a168ed:0xa3edc1346e257460!8m2!3d51.7802857!4d-1.2655922!16s%2Fg%2F12cpmmmrs"
                target="_blank"
              >
                Ver no mapa
              </a>
            </span>
          </div>
        </div>
        <div className="mx-auto py-[20px]">
          <iframe
            className="mx-auto w-[100%] h-[40vh] sm:w-[80%] md:w-[70%] lg:max-w-[50%] lg:h-[50vh] rounded-lg"
            src="https://www.youtube.com/embed/N3YOB2g_dg0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Donate;
