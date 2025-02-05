"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { isClerkAPIResponseError, useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { Separator } from "@shared-components/ui/separator";
import { checkEmailSchema } from "@shared-components/lib/auth";
import { Button } from "@shared-components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared-components/ui/form";
import { Input } from "@shared-components/ui/input";
import { Icons } from "@shared-components/graphics/icons";

type Inputs = z.infer<typeof checkEmailSchema>;

interface ResetPasswordFormProps {
  formlabel: string;
  formbutton: string;
  inputplaceholder: string;
  formbuttondescription: string;
  previous_step: string;
}

export function ResetPasswordForm({
  formlabel,
  formbutton,
  inputplaceholder,
  formbuttondescription,
  previous_step,
}: ResetPasswordFormProps) {
  const router = useRouter();
  const { isLoaded, signIn } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(checkEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const firstFactor = await signIn.create({
          strategy: "reset_password_email_code",
          identifier: data.email,
        });

        if (firstFactor.status === "needs_first_factor") {
          router.push("/signin/reset-password/step-2");
          toast.message("Check your email", {
            description: "We sent you a 6-digit verification code.",
          });
        }
      } catch (error) {
        const unknownError = "Something went wrong, please try again.";

        isClerkAPIResponseError(error)
          ? toast.error(error.errors[0]?.longMessage ?? unknownError)
          : toast.error(unknownError);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4 sm:gap-2"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className="sm:hidden block">
                {inputplaceholder}
              </FormLabel> */}
              <FormControl>
                <Input placeholder={inputplaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-2" />
        <Button disabled={isPending} variant="primaryButton" size="fullSize">
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {formbutton}
          <span className="sr-only">{formbuttondescription}</span>
        </Button>
        <Button
          aria-label="Go back to the previous page"
          variant="secondaryButton"
          size="fullSize"
          onClick={() => router.back()}
          disabled={isPending}
        >
          {previous_step}
        </Button>
      </form>
    </Form>
  );
}
