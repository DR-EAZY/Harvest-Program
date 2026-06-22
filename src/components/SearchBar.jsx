import { IoSearch } from "react-icons/io5";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="relative mb-6">

      <IoSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          bg-white
          rounded-full
          py-3
          pl-12
          pr-5
          shadow-md
          border
          border-gray-200
          focus:outline-none
          focus:ring-2
          focus:ring-orange-400
        "
      />

    </div>
  );
}