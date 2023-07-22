"use client";

import {Menu} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

export default function MobileSidebar(){
    return (
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
          <SheetContent side="left" className="p-0">
            <Sidebar />
          </SheetContent>
        </SheetTrigger>
      </Sheet>
    )
}
