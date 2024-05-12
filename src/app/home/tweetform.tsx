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
import { postTweet } from "./posttweet";
import { tweetSchema } from "./tweetvalidation";

export function TweetForm() {
  const form = useForm<z.infer<typeof tweetSchema>>({
    resolver: zodResolver(tweetSchema),
    defaultValues: {
      tweet: "",
    },
  });

  return (
    <Form {...form}>
      <form
        action={postTweet}
        className="col-start-2 col-end-8 row-start-1 row-end-1"
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
        <div className="mx-auto flex min-w-0 max-w-md flex-row justify-end py-6">
          <Button
            type="submit"
            size={"sm"}
            disabled={!form.formState.isValid}
            onClick={() => form.reset()}
          >
            Post
          </Button>
        </div>
        <Separator />
      </form>
    </Form>
  );
}
