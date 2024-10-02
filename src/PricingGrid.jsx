import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function PricingGrid({ name }) {
  return (
    <div className="first:border-red-600 group hover:bg-zinc-500 even:border-yellow-700 last:border-pink-800 max-w-60 mx-auto text-center flex flex-col gap-10 p-4 rounded-2xl border border-[6px] border-blue-950">
      <h1 className="text-purple-950 font-bold  group-hover:text-white">
        {name}
      </h1>
      <div className="flex flex-col gap-2">
        <h1 className="group-hover:text-white text-5xl">100GB</h1>
        <p className="group-hover:text-white">$1.99/month</p>
        <button className="bg-purple-800 text-white mt-2 border group-hover:text-white rounded-xl px-10 py-3 mx-6 hover:bg-purple-950 group-hover:bg-white group-hover:border-purple-900   group-hover:font-bold  group-hover:text-purple-900 ">
          Purchase
        </button>
      </div>
      <div>
        <hr className="border group-hover:text-white mb-4 border-t-[2px]" />

        <ul>
          <li className="group-hover:text-white text-nowrap">
            <FontAwesomeIcon icon={faCheck} /> 100GB Storage
          </li>
          <li className="group-hover:text-white text-nowrap">
            <FontAwesomeIcon icon={faCheck} /> Option to Add Members
          </li>
          <li className="group-hover:text-white text-nowrap">
            {" "}
            <FontAwesomeIcon icon={faCheck} /> Extra Member facilities
          </li>
        </ul>
      </div>
    </div>
  );
}
