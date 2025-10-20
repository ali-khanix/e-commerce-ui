import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormInputs, shippingFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4 "
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label className="text-xs text-zinc-500 font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="text"
          id="name"
          placeholder="John Doe"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-zinc-500 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-zinc-500 font-medium" htmlFor="phone">
          Phone
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="text"
          id="phone"
          placeholder="09101234567"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-zinc-500 font-medium" htmlFor="address">
          Address
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="text"
          id="address"
          placeholder="John Doe st, new jersy"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-zinc-500 font-medium" htmlFor="city">
          City
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="text"
          id="city"
          placeholder="los angeles"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-sm text-red-500">{errors.city.message}</p>
        )}
      </div>

      <Button className="" type="submit">
        <span>Continue</span>
        <span>
          <ArrowRight />
        </span>
      </Button>
    </form>
  );
};

export default ShippingForm;
