'use client';

import axios from "axios";
import {Zap} from "lucide-react";

import {Button} from "@/components/ui/button";
import {useState} from "react";

interface Props {
  isPro: boolean;
}

export default function SubscriptionButton({ isPro }: Props){

  const [loading,setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/stripe');
      window.location.href = response.data.url;
    } catch (err:any){
      console.log("BILLING_ERROR", err);
    } finally {
      setLoading(false);
    }
  }
    return (
        <Button disabled={loading} variant={isPro ? "default" : "premium"} onClick={onClick}>
          {isPro? "Manage Subscription" : "Upgrade" }
          {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
        </Button>
    )
}
