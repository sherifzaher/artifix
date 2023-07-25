"use client";

import {Menu} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import {useEffect, useState} from "react";


type Props = {
  apiLimitCount: number;
  isPro: boolean;
}
export default function MobileSidebar({ apiLimitCount, isPro = false }: Props){
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button asChild variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
        <SheetContent side="left" className="p-0">
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  )
}
