"use client";

import { saveWork } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./buttons";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function WorkPost() {
  const [state, formAction] = useFormState(saveWork, null);
  return (
    <Card className="w-full min-w-min ">
      <CardHeader>
        <CardTitle>Create a New Project</CardTitle>
        <CardDescription>
          Fill out the form below to get started with your new project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" action={formAction}>
          <div className="grid gap-2">
            <Label htmlFor="image">Project Image</Label>
            <Input id="image" type="file" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="title">Project Title</Label>
            <Input id="title" placeholder="Enter a title for your project" />
          </div>
          <div id="name-erro" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.title}</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Provide a brief description of your project"
            />
          </div>
          <div id="name-erro" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.content}</p>
          </div>

        </form>
      </CardContent>
      <SubmitButton label="save" />
      {/* <CardFooter className="flex justify-end">
        <Button>Create Project</Button>
      </CardFooter> */}
    </Card>
  );
}
