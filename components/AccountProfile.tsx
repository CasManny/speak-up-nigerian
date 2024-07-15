"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { IUserData } from "@/types";
import React, { ChangeEvent, useState } from "react";
import { formSchema } from "@/utils/validator";
import { gender, nigeriaStates, roleInCountry } from "@/constants";
import Loading from "./Loading";
import { updateUser } from "@/utils/database/actions/user.action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AccountProfile = ({ user }: IUserData) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

 

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      state: "",
      roleInCountry: "",
      dateOfBirth: "",
      gender: "",
      lga: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (!values.dateOfBirth || !values.fullname || !values.gender || !values.lga || !values.roleInCountry || !values.state) {
        return toast.error("All field must be complete!")
      }
      setLoading(true);
      await updateUser({
        clerkId: user.clerkId,
        profilePicture: user.image_url,
        fullName: values.fullname,
        state: values.state,
        lga: values.lga,
        gender: values.gender,
        dateOfBirth: values.dateOfBirth,
        userRole: values.roleInCountry,
        onboarded: true,
      });
      setLoading(false)
      toast.success('Onboarding completed successfully!')
      router.push("/complains")
    } catch (error: any) {
      toast.error(error.message)
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-3">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col">
                <FormLabel>Full Name</FormLabel>
                <FormControl className="w-full">
                  <Input
                    placeholder="Enter your full name"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {nigeriaStates.map((state, index) => (
                      <SelectItem value={state} key={index}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-3">
          <FormField
            control={form.control}
            name="roleInCountry"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col">
                <FormLabel>Role In Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Citizen or Government official" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roleInCountry.map((state, index) => (
                      <SelectItem value={state} key={index}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lga"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col">
                <FormLabel>Local Government Area [LGA]</FormLabel>
                <FormControl className="w-full">
                  <Input
                    placeholder="Enter your LGA"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-3">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col">
                <FormLabel>Sex</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="choose your Sex" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {gender.map((state, index) => (
                      <SelectItem value={state} key={index}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      fromYear={1980}
                      toYear={2024}
                      captionLayout="dropdown"
                      mode="single"
                      //   selected={field.value}`
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="bg-green-2">
          {loading ? <Loading /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
