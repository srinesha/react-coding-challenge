import { Field } from "@/lib/formSlice";
import React from "react";

export default function TextField({ data }: { data: Field }) {
  return (
    <label>
      {data.name}
      <input disabled={data.isDisabled} type="text" />
    </label>
  );
}
