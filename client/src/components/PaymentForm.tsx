import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInputs, paymentFormSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};

  return (
    <form
      className="flex flex-col gap-4 "
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          className="text-xs text-zinc-500 font-medium"
          htmlFor="cardHolder"
        >
          Name on card
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-xs text-zinc-500 font-medium"
          htmlFor="cardNumber"
        >
          Card Number
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="123456789123"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-xs text-zinc-500 font-medium"
          htmlFor="expirationDate"
        >
          Expiration Date
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="text"
          id="expirationDate"
          placeholder="09101234567"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-sm text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-zinc-500 font-medium" htmlFor="cvv">
          CVV
        </label>
        <input
          className="border-b border-b-zinc-300 py-2 outline-none text-sm"
          type="text"
          id="cvv"
          placeholder="John Doe st, new jersy"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-sm text-red-500">{errors.cvv.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Image
          src={"/klarna.png"}
          alt="klarna"
          width={50}
          height={24}
          className="rounded-md"
        />
        <Image
          src={"/cards.png"}
          alt="klarna"
          width={50}
          height={24}
          className="rounded-md"
        />
        <Image
          src={"/stripe.png"}
          alt="klarna"
          width={50}
          height={24}
          className="rounded-md"
        />
      </div>

      <Button className="" type="submit">
        <span>Checkout</span>
        <span>
          <ShoppingCart />
        </span>
      </Button>
    </form>
  );
};

export default PaymentForm;
