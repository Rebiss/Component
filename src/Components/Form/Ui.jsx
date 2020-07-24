import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

export default function Ui() {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller as={<Input />} name="HelloWorld" control={control} />
      <Controller as={<InputField />} name="AntdInput" control={control} />
      <Controller as={<Select />} name="reactSelect" control={control} />

      <input type="submit" />
    </form>
  );
}