import { Button, Stack, TextField, Typography } from "@mui/material";
import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const categories = ["Economy", "Housing", "Employment", "Justice"];

type FormValues = {
  name: string;
  category: string;
  description: string;
};

export default function ProcedureForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    (data) => {
      console.log(data);
      navigate("design");
    },
    [navigate]
  );

  return (
    <div>
      <Typography variant="h4" component="h1" mb={2}>
        Create a new procedure
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
            error={Boolean(errors.name)}
            helperText={errors.name && errors.name.message}
          />
          <TextField
            label="Category"
            select
            SelectProps={{
              native: true,
            }}
            {...register("category", {
              required: { value: true, message: "Category is required" },
            })}
            error={Boolean(errors.category)}
            helperText={errors.category && errors.category.message}
          >
            {/* TODO: fix validation */}
            <option value={undefined}>--Select category--</option>
            {categories.map((c, i) => (
              <option value={c} key={i}>
                {c}
              </option>
            ))}
          </TextField>
          <TextField
            label="Description"
            {...register("description", {
              required: { value: true, message: "Description is required" },
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
            error={Boolean(errors.description)}
            helperText={errors.description && errors.description.message}
          />

          <Button type="submit" variant="contained" sx={{ alignSelf: "end" }}>
            Next
          </Button>
        </Stack>
      </form>
    </div>
  );
}
