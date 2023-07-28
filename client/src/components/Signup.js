import React from "react";
import { userSchema } from "../validation/userSignup";
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import { toast,ToastContainer } from "react-toastify";
import { userSignup } from "../axios/service/clientService";



function Signup() {
  async function onSubmit() {
    const response = await userSignup(values);
   
    if (response?.status) {
      toast.success(response?.message);
      
    } else {
      
      toast.error(response?.message);
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",

        address: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
      },
      validationSchema: userSchema,
      onSubmit,
    });

  return (
    <div>
          <ToastContainer />
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
            <p class="text-gray-500 mb-6">
              Form is mobile responsive. Give it a try.
            </p>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <form class="lg:col-span-2" onSubmit={handleSubmit}>
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      {errors.name && touched.name && (
                    <p className="text-red-600">{errors.name}</p>
                  )}
                      <input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="full_name"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Name"
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      {errors.email && touched.email && (
                    <p className="text-red-600">{errors.email}</p>
                  )}
                      <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        id="email"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div class="md:col-span-3">
                      <label for="address">Address / Street</label>
                      {errors.phone && touched.address && (
                    <p className="text-red-600">{errors.address}</p>
                  )}
                      <input
                        type="text"
                        name="address"
                        id="address"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label for="city">Phone</label>
                      {errors.phone && touched.phone && (
                    <p className="text-red-600">{errors.phone}</p>
                  )}
                      <input
                        type="number"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="phone"
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label for="country">Password</label>
                      {errors.password && touched.password && (
                    <p className="text-red-600">{errors.password}</p>
                  )}
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          placeholder="password"
                          class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div class="md:col-span-2">
                      <label for="state">Confirm Password</label>
                      {errors.cpassword && touched.cpassword && (
                    <p className="text-red-600">{errors.cpassword}</p>
                  )}
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          placeholder="confrim password"
                          class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          name="cpassword"
                          value={values.cpassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
