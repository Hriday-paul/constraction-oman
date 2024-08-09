'use client'

import { usePostMessageMutation } from "@/Redux/Api/Api";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

export default function Form() {
  const [addMessage, { isLoading, isError, isSuccess, data, error }] = usePostMessageMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSend = async (data) => {
    addMessage(data)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Thans for your message. We contact with you as soon as possible.')
    }
    if (isError) {
      toast.error('Something went wrong, try again')
    }
  }, [isSuccess, isError])

  return (
    <div className="w-[100%] p-8 md:p-10 lg:p-12 bg-white border h-full rounded-md">
      <form
        onSubmit={handleSubmit(handleSend)}
        className="flex w-full flex-col lg:flex-row md:flex-row  gap-4  justify-center place-items-start"
      >
        <div className="input  w-full flex flex-col gap-4 h-full">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="First Name*"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Email Address*"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="Phone"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
          <input
            type="text"
            {...register("company")}
            placeholder="Company Name"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
        </div>
        <div className="w-full h-full">
          <textarea
            {...register("message", { required: true })}
            id=""
            rows={7}
            placeholder="Your Requiremant"
            className="w-full p-3 border rounded-md focus:outline-none"
          ></textarea>
          <div className="but">
            <button disabled={isLoading} className="px-10 py-2 hover:bg-orange-600 border-none duration-200 transition-all bg-secondary text-white rounded flex flex-row items-center disabled:cursor-not-allowed disabled:bg-orange-300 mt-2 lg:mt-0">
              {
                isLoading && <CgSpinner className="animate-spin text-white text-xl mr-1" />
              }
              <p>Submit</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
