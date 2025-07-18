// "use client";
// import { Logout_function } from "./logout_action";
// import { useState } from "react";
// export function Logout_user() {
//     const [confirm, set_confirm] = useState<boolean>(false);
//     return (
//         <form action={Logout_function}>
//             <button
//                 type="button"
//                 className={`m-2 p-2 ${confirm ? "bg-blue-500" : "bg-red-500 "} text-black`}
//                 onClick={(e) => {
//                     e.preventDefault();
//                     set_confirm((pr) => !pr);
//                 }}
//             >
//                 {confirm === false ? "Выйти" : "Отмена"}
//             </button>
//             {confirm && (
//                 <button type={"submit"} className={"m-2 p-2 bg-red-500 text-black"}>
//                     Подтвердить
//                 </button>
//             )}
//         </form>
//     );
// }
