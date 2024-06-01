import { MenuIcon } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";

export function MobileNavbar() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="inline-flex lg:hidden" size={'icon'} variant={'ghost'}>
          <MenuIcon size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerClose />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}