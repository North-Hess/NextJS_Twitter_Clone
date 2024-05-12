import { zfd } from "zod-form-data";
import { z } from "zod";

export const tweetSchema = zfd.formData({
    tweet: zfd.text(z.string().min(1, "").max(256)),
  });