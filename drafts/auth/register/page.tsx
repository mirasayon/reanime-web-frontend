// "use client";
// import { loginAction } from "#/actions/auth/login";
// import { LoginInput, loginSchema } from "#/validators/auth/login";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { startTransition, useState } from "react";
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { FaEyeSlash, FaRegEye } from "react-icons/fa";

// export default function Login_Component() {
//     const [is_password_type, set_is_password_type] = useState<boolean>(true);
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors: clientErrors },
//     } = useForm<LoginInput>({
//         resolver: zodResolver(loginSchema),
//         mode: "onBlur",
//     });

//     const [serverErrors, setServerErrors] = useState<Record<string, string[]>>({});

//     const onSubmit = handleSubmit(((data) => {
//         setServerErrors({});
//         // call the Server Action directly
//         startTransition(async () => {
//             const result = await loginAction(data);
//             if (Object.hasOwn(result, "errors")) {
//                 setServerErrors(result!.errors!);
//             }
//             // if ok, loginAction has already redirected
//         });
//     }) as SubmitHandler<LoginInput>);
//     console.log(watch("login")); // watch input value by passing the name of it
//     return (
//         <div className="p-10 flex-row justify-evenly flex ">
//             {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
//             <form onSubmit={onSubmit} className="border-4 border-blue-500/50 rounded-lg p-8 flex text-xl flex-col m-4 " noValidate>
//                 {/* register your input into the hook by invoking the "register" function */}
//                 <div className={`w-full dark:text-slate-300 text-slate-800 font-mono font-bold flex-col flex items-center`}>Добро пожаловать!</div>

//                 <div className=" LOGIN">
//                     {/* Login */}
//                     <label htmlFor="login" className="text-slate-500">
//                         Ваш логин
//                     </label>
//                     <div className={" border-4  border-slate-600 rounded-lg p-2"}>
//                         <span className="text-slate-400">@</span>
//                         {/* Login */}
//                         <input
//                             className={"pl-2 bg-transparent font-mono outline-none"}
//                             type={"text"}
//                             // name={"login"}
//                             id={"login"}
//                             minLength={4}
//                             defaultValue="mirasayon"
//                             {...register("login", { required: true })}
//                             maxLength={20}
//                             required={true}
//                         />
//                     </div>
//                     {clientErrors.login && <p className=" dark:text-violet-600 text-violet-800">{clientErrors.login.message}</p>}
//                     {serverErrors.login?.map((msg, i) => (
//                         <p key={i} className=" dark:text-red-600 text-red-800">
//                             {msg}
//                         </p>
//                     ))}
//                 </div>
//                 <div className="PASSWORD">
//                     {/* Password */}
//                     <label htmlFor="password" className="text-slate-500">
//                         Введите пароль
//                     </label>

//                     <div className="border-4 flex rounded justify-between border-slate-600">
//                         <input
//                             className="p-2 bg-transparent outline-none"
//                             type={is_password_type ? "password" : "text"}
//                             minLength={8}
//                             maxLength={70}
//                             //    name={"password"}
//                             id={"password"}
//                             {...register("password", { required: true })}
//                             required={true}
//                         />
//                         <button
//                             type="button"
//                             className="p-2 pr- cursor-pointer"
//                             onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//                                 e.preventDefault();
//                                 return set_is_password_type((pre_v) => !pre_v);
//                             }}
//                         >
//                             {is_password_type ? <FaEyeSlash /> : <FaRegEye />}
//                         </button>
//                     </div>

//                     {clientErrors.password && <p className=" dark:text-violet-600 text-violet-800">{clientErrors.password.message}</p>}
//                     {serverErrors.password?.map((msg, i) => (
//                         <p key={i} className=" dark:text-red-600 text-red-800">
//                             {msg}
//                         </p>
//                     ))}
//                 </div>
//                 {/* errors will return when field validation fails  */}
//                 {clientErrors.password && <span>This field is required</span>}

//                 <button className="p-2 m-1 mt-3 rounded-lg border-4 border-blue-500/50  cursor-pointer hover:bg-blue-500" type="submit">
//                     Войти
//                 </button>
//             </form>
//         </div>
//     );
// }
export default function () {
    return <></>;
}
