"use client";

import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Form } from "../ui/form";
import { InputFormField, SelectFormField } from "../form-fields";
import { zGender, zSector } from "@/lib/schema";
import { type CandidateFormValues, type BasicDetailsProps } from "./types";
import { zodUnionToOptions } from "@/lib/zodUnionToOptions";

export function BasicDetails({ onSubmit }: BasicDetailsProps) {
  const t = useTranslations();
  const form = useFormContext<CandidateFormValues>();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>{t("PERSONAL_DETAILS")}</div>

        <InputFormField
          control={form.control}
          name="firstName"
          label={t("FIRST_NAME")}
          placeholder={t("FIRST_NAME_PLACEHOLDER")}
        />

        <InputFormField
          control={form.control}
          name="lastName"
          label={t("LAST_NAME")}
          placeholder={t("LAST_NAME_PLACEHOLDER")}
        />

        <InputFormField
          control={form.control}
          name="dateOfBirth"
          label={t("DATE_OF_BIRTH")}
          type="date"
        />

        <InputFormField
          control={form.control}
          name="idNumber"
          label={t("ID")}
          placeholder={t("ID_PLACEHOLDER")}
          type="text"
        />

        <SelectFormField
          control={form.control}
          name="gender"
          label={t("GENDER")}
          placeholder={t("GENDER_PLACEHOLDER")}
          options={zodUnionToOptions(zGender)}
        />

        <div>
          <div>{t("CONTACT_DETAILS")}</div>

          <InputFormField
            control={form.control}
            name="phone"
            label={t("PHONE")}
            placeholder={t("PHONE_PLACEHOLDER")}
            type="tel"
          />
        </div>

        <div>{t("ADDITIONAL_INFO")}</div>
        <div>
          <SelectFormField
            control={form.control}
            name="sector"
            label={t("SECTOR")}
            placeholder={t("SECTOR_PLACEHOLDER")}
            options={zodUnionToOptions(zSector)}
          />
        </div>
      </form>
    </Form>
  );
}
