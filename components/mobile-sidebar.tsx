import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

interface props {
  open: boolean;
  setOpen: () => void;
  routes: {
    label: string;
    href?: string;
    subItems?: { label: string; href: string }[];
  }[];
}

const MobileSidebar = ({ open, setOpen, routes }: props) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="w-full flex flex-col gap-3 mt-5 px-3">
          {routes.map((route, index) =>
            route.subItems ? (
              <div key={index} className="w-full">
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger className="w-full flex items-center justify-between flex-row">
                    {route.label}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="w-full flex flex-col gap-2 mt-2 px-2">
                    {route.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        onClick={setOpen}
                        className="transition-transform duration-300 ease-in-out hover:scale-105 text-sm"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ) : (
              <Link
                href={route.href as string}
                onClick={setOpen}
                className="transition-transform duration-300 ease-in-out hover:scale-105"
                key={index}
              >
                {route.label}
              </Link>
            )
          )}
          <Link href="contactUs">
            <Button onClick={() => setOpen()} className=" w-full mt-5">
              Get Started
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { MobileSidebar };
