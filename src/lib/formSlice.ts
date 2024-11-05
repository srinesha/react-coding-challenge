import { createSlice } from "@reduxjs/toolkit";

export interface Field {
  id: number;
  type: string;
  name: string;
  value?: string | boolean;
  isDisabled: boolean;
  condition?: {
    visible: {
      when: {
        value: true;
        fieldId: number;
      };
    };
  };
  children?: Field[];
}

const initialState: Field = {
  id: 11111,
  type: "form",
  name: "Form",
  isDisabled: false,
  children: [
    {
      id: 1234,
      name: "",
      type: "step",
      isDisabled: false,
      children: [
        {
          id: 2903848,
          type: "checkbox",
          name: "Checkbox",
          value: true,
          isDisabled: false,
          condition: {
            visible: {
              when: {
                value: true,
                fieldId: 2903847,
              },
            },
          },
        },
        {
          id: 2903847,
          type: "textfield",
          name: "Text Field",
          value: false,
          isDisabled: true,
        },
      ],
    },
  ],
};

const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {},
});

export const {} = formSlice.actions;

export default formSlice.reducer;
