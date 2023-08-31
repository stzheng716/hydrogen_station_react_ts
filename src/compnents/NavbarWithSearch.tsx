import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

  export function NavbarWithSearch(): JSX.Element {
    return (
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="px-4 py-3"
        fullWidth={true}
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white bg-slate-400 rounded p-4">
          <Typography
            as="a"
            href="/"
            variant="h4"
            color="white"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Hydrogen Station
          </Typography>
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton variant="text" color="white">
              <Cog6ToothIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="text" color="white">
              <BellIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="black"
              label="zipcode"
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
              crossOrigin=""
            />
            <Button
              size="sm"
              color="blue"
              className="!absolute right-1 top-1 rounded bg-black"
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    );
  }