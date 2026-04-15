import { Button } from "@/common/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/common/components/ui/field";
import { Input } from "@/common/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { Textarea } from "@/common/components/ui/textarea";
import { Controller, Resolver } from "react-hook-form";
import FormSectionLayout from "./form-section-layout";
import ImageDropzone from "./image-dropzone";
import { useForm } from "react-hook-form";
import { AuctionForm, auctionSchema } from "../schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { SWR_KEY } from "@/common/constants/swr-key";
import { getCategories } from "@/services/category";
import { useOptions } from "@/common/hooks/use-options";
import { TCategory } from "@/services/category/type";
import { useDebounceState } from "@/common/hooks/use-debounce-state";

interface Props {
  onSubmit: (data: AuctionForm) => void;
}

export default function FormCreateAuction({ onSubmit }: Props) {
  const [categorySearch, setCategorySearch] = useDebounceState<string>();

  const { options, isLoading } = useOptions<TCategory>({
    keyFetch: SWR_KEY.CATEGORY.GET_ALL,
    fetcher: getCategories,
    params: {
      search: categorySearch,
    },
    labelKey: "name",
    valueKey: "id",
  });

  const form = useForm<AuctionForm>({
    resolver: zodResolver(auctionSchema) as unknown as Resolver<AuctionForm>,
    defaultValues: {
      name: "",
      description: "",
      startTime: "",
      endTime: "",
      bidIncrement: 0,
      startPrice: 0,
      categoryId: "",
      images: undefined,
    },
  });
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-10">
      <FormSectionLayout title="01. ASSET INFORMATION">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>TITLE</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="LUXURY YATCH"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="categoryId"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>CATEGORY</FieldLabel>
              <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <Input
                    placeholder="SEARCH"
                    onChange={(e) => setCategorySearch(e.target.value)}
                  />
                  <SelectGroup>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>DESCRIPTION</FieldLabel>
              <Textarea
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Provide full provenance and physical spesifications"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FormSectionLayout>
      <FormSectionLayout title="02. VISUAL DOCUMENTATION">
        <Controller
          name="images"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <ImageDropzone {...field} aria-invalid={fieldState.invalid} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FormSectionLayout>
      <FormSectionLayout title="03. FINANCIAL PARAMETERS">
        <div className="grid grid-cols-2 gap-5">
          <Controller
            name="startPrice"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>STARTING PRICE</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="$0.0"
                  type="number"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="bidIncrement"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  MINIMUM BID INCREMENT
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="$0.0"
                  autoComplete="off"
                  type="number"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </FormSectionLayout>
      <FormSectionLayout title="04. EVENT SCHEDULING">
        <div className="grid grid-cols-2 gap-5">
          <Controller
            name="startTime"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  AUCTION OPENING DATE/TIME
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  type="datetime-local"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="endTime"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  AUCTION CLOSING DATE/TIME
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  type="datetime-local"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </FormSectionLayout>
      <Button size="lg" className="w-full font-bold mt-10">
        FINALIZE & LIST ASSET
      </Button>
    </form>
  );
}
