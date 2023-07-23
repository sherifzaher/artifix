"use client";

import {useState} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import axios from 'axios'
import * as z from 'zod';
import {useForm} from "react-hook-form";
import {Download, ImageIcon} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod";

import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Card, CardFooter} from "@/components/ui/card";

import Heading from "@/components/heading";
import Empty from "@/components/empty";
import Loader from "@/components/loader";

import {useProModal} from "@/hooks/use-pro-modal";

import {amountOptions, formSchema, resolutionOptions} from './constants'

export default function ConversationPage(){
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const proModal = useProModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512"
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmitForm = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const response  = await axios.post('/api/image', values);

      const urls = response.data.map((image:{ url: string }) => image.url);

      setImages(urls);

      form.reset();
    } catch (err: any){
      if (err?.response?.status === 403){
        proModal.onOpen();
      }
      console.log(err);
    } finally {
      router.refresh();
    }
  }


  return (
    <div>
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)} className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-md grid grid-cols-12 gap-2">
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="A picture of a horse in Swiss alps"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="amount"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select disabled={isLoading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((amount) => (
                          <SelectItem key={amount.value} value={amount.value}>
                            {amount.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name="resolution"
                control={form.control}
                render={({field}) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select disabled={isLoading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((amount) => (
                          <SelectItem key={amount.value} value={amount.value}>
                            {amount.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading || false}>Generate</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label="No images generated." />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              <Card key={src} className="rounded-lg overflow-hidden" >
                <div className="relative aspect-square">
                  <Image fill src={src} alt="generated image" />
                </div>
                <CardFooter className="p-2">
                  <Button onClick={() => window.open(src)} variant="secondary" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
