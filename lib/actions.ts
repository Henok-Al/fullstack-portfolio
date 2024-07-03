"use server";

import { z } from "zod";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const WorkSchema = z.object({
    title: z.string().min(6),
    content: z.string().min(11),
  });


//create work
export const saveWork = async (prevState: any, formData: FormData) => {
    const validatedFields = WorkSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
  
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }
  
    try {
      await prisma.work.create({
        data: {
          title: validatedFields.data.title,
          content: validatedFields.data.content,
        },
      });
    } catch (error) {
      return { message: "Failed to create work" };
    }
  
    revalidatePath("/");
    redirect("/");
  };
  