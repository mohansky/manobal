"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchCheck } from "lucide-react";
import { useDebounce } from "use-debounce";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/shop`);
    } else {
      router.push(`/shop?search=${query}`);
    }
  }, [query]);

  return (
    <>
      <div className="flex">
        <Label htmlFor="text" className="my-auto mr-5">Search: </Label>

        <Input
          value={text}
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
          className="w-48 my-auto bg-muted"
        />
      </div>
    </>
  );
};

export default Search;
