const Contact = () => {
  return (
    <div className="flex flex-row h-[35dvh] w-full p-9">
      <div className="flex h-full w-full  justify-between rounded-lg bg-white/13 border border-gray-200/25 backdrop-blur-sm shadow-lg ">
        <div className="flex h-full w-[65%] font-bold text-5xl items-center justify-center">
          <h2 className="text-white">Lucas Roberts.</h2>
        </div>



        <div className="flex flex-col h-full w-[50%] items-center justify-center">
          <h4 className="text-white font-medium text-lg">Let's Connect</h4>

          <a
            href=""
            className="text-white hover:underline"
          >
            Linkedin
          </a>
          <a
            href=""
            className="text-white hover:underline"
          >
            Youtube
          </a>
          <a
            href=""
            className="text-white hover:underline"
          >
            Leetcode
          </a>
          <a
            href="https://github.com/Lucas-Roberts"
            className="text-white hover:underline"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
