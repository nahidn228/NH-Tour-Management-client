

import { Button } from "@/components/ui/button";
import Logo from "@/assets/icon/Logo";
import { Link, useSearchParams } from "react-router";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGetDivisionsQuery } from "@/redux/features/division/division.api";

const HeroSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: divisionData, isLoading: divisionIsLoading } =
    useGetDivisionsQuery(undefined);

  const selectedDivision = searchParams.get("division") || undefined;
  const divisionOption = divisionData?.map(
    (item: { _id: string; name: string }) => ({
      label: item.name,
      value: item._id,
    })
  );

  const handleDivisionChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("division", value);
    setSearchParams(params);
  };

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Logo />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                Experience the Colors of{" "}
                <span className="text-primary">Bangladesh</span>
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                “From the serene hills of Bandarban to the world’s longest sea
                beach in Cox’s Bazar, and from the tea gardens of Sylhet to the
                vibrant Sundarbans — Bangladesh offers breathtaking destinations
                for every traveler.”
              </p>
            </div>

            {/* <div className="mt-6 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow">
                <Link to={"/tours"}> Get Started</Link>
              </Button>
              <Button variant="outline" className="group">
                <Link to={"/about"}> Learn more </Link>

                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div> */}

            <div className="mt-6 flex  gap-2 items-center">
              <Select
                onValueChange={(value) => handleDivisionChange(value)}
                value={selectedDivision ? selectedDivision : ""}
                disabled={divisionIsLoading}
              >
                <SelectTrigger className="w-[100px] md:w-[200px] lg:w-[300px] xl:w-[350px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Divisions</SelectLabel>
                    {divisionOption?.map(
                      (item: { value: string; label: string }) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {selectedDivision ? (
                <Button asChild>
                  <Link to={`/tours?division=${selectedDivision}`}>Search</Link>
                </Button>
              ) : (
                <Button disabled>Search</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
