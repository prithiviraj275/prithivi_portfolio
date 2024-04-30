import React from "react";

const Missing = () => {
  return (
    <section
      id="Missing"
      className="w-full h-full my-10 flex flex-col font-cairo p-6"
    >
      <div className="name-container flex flex-col items-center">
        <h1 className="font-bold text-5xl tracking-widest">
          Error 404. Page Not Found
        </h1>
        <p className="my-5 text-2xl">Please Check the link</p>
      </div>
    </section>
  );
};

export default Missing;
