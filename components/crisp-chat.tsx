"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";


const WEBSITE_ID = process.env.CRISP_WEBSITE_ID;

export default function CrispChat(){

  useEffect(() => {
    Crisp.configure("b9dc189f-714f-4a3c-ad2e-25f4c5b9804a");
  },[]);

  return null;
}
