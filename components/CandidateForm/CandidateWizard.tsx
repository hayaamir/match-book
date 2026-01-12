"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Id } from "@/convex/_generated/dataModel";
import { BasicDetails } from "./BasicDetails";
import { ImageUpload } from "../ui/Imageupload";
import { Button } from "../ui/button";
import { useCreateCandidate } from "@/hooks/candidate/useCandidates";
import { toast } from "sonner";
import {
  candidateFormSchema,
  CandidateFormValues,
  CandidateWizardProps,
} from "./types";

export const CandidateWizard = ({ candidateData }: CandidateWizardProps) => {
  const t = useTranslations();

  const [currentStep, setCurrentStep] = useState(0);
  const [candidateId, setCandidateId] = useState<Id<"candidates"> | null>(null);

  const createCandidate = useCreateCandidate();

  const form = useForm<CandidateFormValues>({
    resolver: zodResolver(candidateFormSchema),
    defaultValues: {
      firstName: candidateData?.firstName ?? "",
      lastName: candidateData?.lastName ?? "",
      gender: candidateData?.gender ?? undefined,
      dateOfBirth: candidateData?.dateOfBirth ?? "",
      phone: candidateData?.phone ?? "",
      sector: candidateData?.sector ?? undefined,
      status: candidateData?.status ?? "active",
      idNumber: candidateData?.idNumber ?? "",
    },
  });

  const submitCandidate = async (data: CandidateFormValues) => {
    try {
      const newCandidateId = await createCandidate({
        ...data,
        sector: data.sector ?? "chabad",
        status: data.status ?? "active",
      });

      setCandidateId(newCandidateId);
      setCurrentStep((prev) => prev + 1);
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error(t("TOAST_ERROR_TITLE"), { description: t("TRY_LATER") });
    }
  };

  const handleNext = async () => {
    if (currentStep === 0) {
      if (candidateId) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        return;
      }

      await form.handleSubmit(submitCandidate)();
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const steps = [
    {
      id: 1,
      title: t("BASIC_INFO"),
      component: (
        <FormProvider {...form}>
          <BasicDetails onSubmit={submitCandidate} />
        </FormProvider>
      ),
    },
    {
      id: 2,
      title: t("UPLOAD_IMAGES"),
      component: <ImageUpload candidateId={candidateId!} />,
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-center gap-2">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`h-2 flex-1 rounded ${
              idx === currentStep ? "bg-primary" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <div className="min-h-1">{steps[currentStep]?.component}</div>

      <div className="flex gap-2 justify-between pt-4 border-t">
        <Button
          type="button"
          onClick={handlePrev}
          disabled={currentStep === 0}
          variant="outline"
        >
          {t("PREV")}
        </Button>
        <Button type="button" onClick={handleNext}>
          {t("NEXT")}
        </Button>
      </div>
    </div>
  );
};
