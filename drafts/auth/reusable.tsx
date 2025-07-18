// import Link from "next/link";
// import { useState } from "react";
// import { FaEyeSlash, FaRegEye } from "react-icons/fa";

// export function Login_input({ input_id = "login" }: { input_id: string }) {
//     const [login_text, set_login_text] = useState<string>("");
//     return (
//         <div className={" border-4  border-slate-600 rounded-lg p-2"}>
//             <span className="text-slate-400">@</span>
//             <input
//                 className={"pl-2 bg-transparent font-mono outline-none"}
//                 type={"text"}
//                 name={input_id}
//                 id={input_id}
//                 minLength={4}
//                 onChange={(e) => {
//                     e.preventDefault();
//                     const textlogin = e.currentTarget.value;
//                     set_login_text((pr) => textlogin.toLowerCase());
//                 }}
//                 maxLength={20}
//                 value={login_text}
//                 required={true}
//             />
//         </div>
//     );
// }
// export function Analog_purpose({ purpose }: { purpose: "login" | "register" }) {
//     return (
//         <div className="flex flex-col items-center m-2">
//             <span className="m-2 p-2 ">Либо</span>
//             <Link
//                 className="px-20 py-2  rounded-lg hover:bg-blue-400/50 border-4 border-blue-400"
//                 href={`/auth/${purpose}`}
//             >
//                 {purpose === "register" ? "Зарегистрироваться" : "Войти"}
//             </Link>
//         </div>
//     );
// }

// export function Adaptive_submit_button({ purpose }: { purpose: "login" | "register" }) {
//     return (
//         <>
//             <button
//                 className="p-2 m-1 mt-3 rounded-lg border-4 border-blue-500/50  cursor-pointer hover:bg-blue-500"
//                 type="submit"
//             >
//                 {purpose === "register" ? "Зарегистрироваться" : "Войти"}
//             </button>
//         </>
//     );
// }

// export function Adaptive_error_message({
//     message,
//     is_dark,
// }: {
//     message: string;
//     is_dark: boolean;
// }) {
//     return (
//         <div
//             className={` text-wrap flex text-[90%] p-1 rounded-lg mt-2 ${
//                 is_dark ? "border-4 border-red-500/50 text-slate-300" : "bg-red-300 text-black"
//             }`}
//         >
//             <span>{message}</span>
//         </div>
//     );
// }

// export function Password_input({ input_id = "password" }: { input_id: string }) {
//     "use client";
//     const [is_password_type, set_is_password_type] = useState<boolean>(true);
//     return (
//         <>
//             <div className="border-4 flex rounded justify-between border-slate-600">
//                 <input
//                     className="p-2 bg-transparent outline-none"
//                     type={is_password_type ? "password" : "text"}
//                     minLength={8}
//                     maxLength={70}
//                     name={input_id}
//                     id={input_id}
//                     required={true}
//                 />
//                 <button
//                     type="button"
//                     className="p-2 pr-4"
//                     onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//                         e.preventDefault();
//                         return set_is_password_type((pre_v) => !pre_v);
//                     }}
//                 >
//                     {is_password_type ? <FaEyeSlash /> : <FaRegEye />}
//                 </button>
//             </div>
//         </>
//     );
// }

// export function Text_input({
//     max = 20,
//     min = 2,
//     input_id = "default",
//     required = true,
// }: {
//     max: number;
//     min: number;
//     required: boolean;
//     input_id: string;
// }) {
//     return (
//         <>
//             <input
//                 className="p-2 outline-none bg-transparent border-4 rounded border-slate-600"
//                 type="text"
//                 minLength={min}
//                 maxLength={max}
//                 name={input_id}
//                 id={input_id}
//                 required={required}
//             />
//         </>
//     );
// }

// export function Adaptive_errors_container({
//     is_dark,
//     errors,
// }: {
//     is_dark: boolean;
//     errors: {
//         message: string;
//         activation: boolean;
//     }[];
// }) {
//     return (
//         <div className="flex flex-col w-[100%]">
//             {errors.map((err, errindex) => {
//                 return (
//                     err.activation && (
//                         <Adaptive_error_message
//                             key={`${errindex} ${err.message}`}
//                             message={err.message}
//                         />
//                     )
//                 );
//             })}
//         </div>
//     );
// }
