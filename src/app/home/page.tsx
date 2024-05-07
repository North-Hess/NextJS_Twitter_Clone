"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const mockTweets = [
    "Wow so cool",
    "amazing content as always!",
    "This thing sucks :(",
  ];

  const formSchema = z.object({
    tweet: z.string().min(1, "").max(256),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tweet: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="ml-16 h-screen w-full min-w-0 max-w-xl shrink-0 border-x border-slate-200 dark:border-slate-800 md:ml-64">
      <div className="mx-auto grid w-full shrink-0 grid-cols-8 grid-rows-1 pt-8">
        <div className="col-start-1 col-end-1 row-start-1 row-end-auto mx-auto pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-start-2 col-end-8 row-start-1 row-end-1 space-y-6"
          >
            <FormField
              control={form.control}
              name="tweet"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="mx-auto max-h-fit min-h-fit min-w-0 max-w-md resize-none"
                      placeholder="What is happening?!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mx-auto flex min-w-0 max-w-md flex-row justify-end">
              <Button type="submit" size={"sm"}>
                Post
              </Button>
            </div>
            <Separator />
          </form>
        </Form>
      </div>
      <div className="flex flex-col">
        {mockTweets.map((value, key) => {
          return (
            <div
              className="grid min-h-20 auto-rows-min grid-cols-8 border border-b pt-2 dark:border-slate-800"
              key={key}
            >
              <div className="col-start-1 col-end-1 row-start-1 row-end-3 mx-auto pr-1 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <div className="col-start-2 col-end-8 row-start-1 row-end-1 font-semibold">
                <span className="">User Info </span>
                <span className="text-sm font-light text-slate-400">
                  @randomstuff
                </span>
              </div>
              <div className="col-start-2 col-end-8 row-start-2 font-light">
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
