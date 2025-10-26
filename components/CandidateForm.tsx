"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "convex/react";
import { WithoutSystemFields } from "convex/server";
import { toast } from "sonner";

import { genderOptions, sectorOptions } from "../convex/schema";
import { api } from "../convex/_generated/api";
import type { Doc, Id } from "../convex/_generated/dataModel";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type CandidateFormValues = WithoutSystemFields<Doc<"candidates">>;

type Props = {
  candidateData: Doc<"candidates"> | null;
  candidateId: Id<"candidates"> | null;
};

export function CandidateForm({ candidateData, candidateId }: Props) {
  const createCandidate = useMutation(api.candidates.createCandidate);

  const form = useForm<CandidateFormValues>({
    defaultValues: {
      firstName: candidateData?.firstName ?? "",
      lastName: candidateData?.lastName ?? "",
      gender: candidateData?.gender,
      dateOfBirth: candidateData?.dateOfBirth ?? "",
      phone: candidateData?.phone ?? "",
      sector: candidateData?.sector ?? ("" as any),
      status: candidateData?.status ?? "active",
    },
  });

  const onSubmit = async (data: CandidateFormValues) => {
    try {
      const newCandidateId = await createCandidate(data as any);

      toast.success("מועמד נוצר בהצלחה! 🎉", {
        description: `${data.firstName} ${data.lastName} נוסף למערכת`,
        action: {
          label: "סגור",
          onClick: () => console.log("Toast closed"),
        },
      });

      form.reset();
    } catch (error) {
      console.error("שגיאה בשמירת מועמד:", error);

      toast.error("אופס! משהו השתבש", {
        description: "נסה שוב מאוחר יותר",
        action: {
          label: "נסה שוב",
          onClick: () => form.handleSubmit(onSubmit)(),
        },
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>שם פרטי</FormLabel>
              <FormControl>
                <Input placeholder="הזן שם פרטי" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>שם משפחה</FormLabel>
              <FormControl>
                <Input placeholder="הזן שם משפחה" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>תאריך לידה</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>מגדר</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="בחר מגדר" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {genderOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>מספר טלפון</FormLabel>
              <FormControl>
                <Input placeholder="הזן מספר טלפון" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>מגזר</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="בחר מגזר" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sectorOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          הוסף מועמד
        </Button>
      </form>
    </Form>
  );
}
