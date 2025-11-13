import Link from "next/link";
import type { JSX } from "react";
const ABOUT =
    "AbuseIPDB — это черный список IP-адресов, предназначенный для веб-мастеров и системных администраторов, которые могут сообщать об IP-адресах, участвующих в злонамеренных действиях в их сетях.";
export function AbuseIpDbContributor(): JSX.Element {
    return (
        <div className=" flex">
            <div className=" flex p-1 m-4 mt-0 min-h-12 h-15 dark:bg-blue-100 bg-white border-2 border-black rounded dark:border-slate-500">
                <Link href="https://www.abuseipdb.com/user/248528" title={ABOUT}>
                    <img src="https://www.abuseipdb.com/contributor/248528.svg" alt="Значок участника AbuseIPDB" className="h-12" />
                </Link>
            </div>
        </div>
    );
}
