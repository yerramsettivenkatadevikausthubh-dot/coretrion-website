"use client";


interface BlockCardProps {

  title: string;

  description: string;

  image?: string;

  active?: boolean;

  onClick?: () => void;

}



export default function BlockCard({

  title,

  description,

  image,

  active,

  onClick,

}: BlockCardProps) {


  return (

    <button

      onClick={onClick}

      className={`
      w-full
      text-left
      rounded-xl
      border
      p-5
      transition-all
      duration-300

      ${
        active
        ?
        "border-blue-500 bg-blue-500/10"
        :
        "border-gray-700 hover:border-blue-400"
      }

      `}

    >


      {
        image &&

        <img
          src={image}
          alt={title}
          className="
          w-full
          rounded-lg
          mb-4
          "
        />

      }



      <h3
        className="
        text-xl
        font-semibold
        text-white
        "
      >

        {title}

      </h3>



      <p
        className="
        mt-2
        text-gray-400
        "
      >

        {description}

      </p>


    </button>

  );

}