"use client";

import * as z from 'zod';
import {useForm} from "react-hook-form";
import {MessageSquare} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod";

import Heading from "@/components/heading";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import { formSchema } from './constants'

export default function ConversationPage(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmitForm = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

  return (
      <div>
        <Heading
          title="Conversation"
          description="Our most advanced conversation model."
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"
        />
        <div className="px-4 lg:px-8">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmitForm)} className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-md grid grid-cols-12 gap-2">
                <FormField
                  name="propmt"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          disabled={isLoading}
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          placeholder="How do i calculate the radius of circle"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  ) }
                />
                <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Generate</Button>
              </form>
            </Form>
          </div>
          <div className="space-y-4 mt-4">
            Messages Content
          </div>
        </div>
      </div>
  )
}
