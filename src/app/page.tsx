"use client";

import { useAppSelector } from "@/lib/hooks";
import Checkbox from "./Checkbox";
import TextField from "./TextField";

export default function Home() {
  const form = useAppSelector((state) => state.formSlice);

  return (
    <div>
      {form.children?.map((f) => {
        return f.children?.map((c) => {
          switch (c.type) {
            case "checkbox":
              return (
                <div key={c.id}>
                  <Checkbox data={c} />
                </div>
              );
            case "textfield":
              return (
                <div key={c.id}>
                  <TextField key={c.id} data={c} />
                </div>
              );
            default:
              return "invalid";
          }
        });
      })}
    </div>
  );
}
