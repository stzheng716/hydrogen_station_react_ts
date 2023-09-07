import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface NarbarWithSearchProps {
  handleSearch: (zipCode: string) => void;
}

export function NavbarWithSearch({
  handleSearch,
}: NarbarWithSearchProps): JSX.Element {
  const [searchZip, setSearchZip] = useState("");

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const input = evt.target;
    setSearchZip(input.value);
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    handleSearch(searchZip);
  }

  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="px-1 py-1 h-1/10"
      fullWidth={true}
    >
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-y-1 md:gap-y-2 text-white bg-slate-600 rounded p-1 md:p-2">
        <Typography
          as="a"
          href="/"
          variant="h3"
          color="white"
          className="text-xs md:text-base mr-2 ml-1 cursor-pointer"
        >
          CA Hydrogen Stations Locator
        </Typography>
        <div className="relative flex w-full gap-2 md:w-max">
          <form onSubmit={handleSubmit}>
            <Input
              type="search"
              color="black"
              label="exact zipcode"
              className="pr-16 md:pr-20"
              onChange={handleChange}
              containerProps={{
                className: "min-w-[200px] md:min-w-[288px]",
              }}
              crossOrigin=""
            />
            <Button
              size="sm"
              color="blue"
              className="!absolute right-1 top-1 rounded bg-black"
              type="submit"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </Navbar>
  );
}
