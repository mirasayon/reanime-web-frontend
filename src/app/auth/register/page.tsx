// "use server";
// import { cookies, headers } from "next/headers";
// import { Register_Component } from "./register-component";
// import { getSessionFromClient } from "#/integrators/auth/cookie-auther";
// import { redirect } from "next/navigation";

// export default async function __Registeration() {
//     const _cookies = await cookies();
//     const _headers = await headers();
//     const is_logged = await getSessionFromClient({ headers: _headers, cookies: _cookies });

//     if (is_logged) {
//         return redirect(`/user/${is_logged.data.account.username}`);
//     }
//     return <Register_Component />;
// }
export default function __Registeration() {
    return <div className=" p-5 m-4 ">Скоро...</div>;
}
