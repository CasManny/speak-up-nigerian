import { nigeriaStates } from "@/constants";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchComplain = () => {
  return (
    //   <select className='select select-bordered w-full max-w-md bg-white my-2 mx-auto'>
    //       {nigeriaStates.map((state, index) => (
    //           <option key={index}>{ state}</option>
    //    ))}
    // </select>
    <Select>
      <SelectTrigger className="max-w-md bg-white mx-auto">
        <SelectValue placeholder="Search complains by State" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>States In Nigeria</SelectLabel>
          {nigeriaStates.map((state, index) => (
            <SelectItem value={state} key={index}>{ state}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SearchComplain;
