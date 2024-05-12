"use server";
import { tweetSchema } from "./tweetvalidation";
import { auth } from "@/lib/auth";
import { db } from "@/db/db";
import { tweets } from "@/db/schema";

export const postTweet = async (form: FormData) => {
    const session = await auth()
    const { tweet } = tweetSchema.parse(form)
    
    if (!session?.user?.id) {
        return {error: "User is not logged in"}
    }

    try{
        await db.insert(tweets).values({ userId: session?.user?.id, tweet })
    }
    catch (e) {
        return {error: e}
    }

  };