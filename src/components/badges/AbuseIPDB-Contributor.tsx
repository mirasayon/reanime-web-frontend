import Link from "next/link";
import type { JSX } from "react";
const ABOUT =
    "AbuseIPDB — это черный список IP-адресов, предназначенный для веб-мастеров и системных администраторов, которые могут сообщать об IP-адресах, участвующих в злонамеренных действиях в их сетях.";
export function AbuseIpDbContributor(): JSX.Element {
    return (
        <div className=" flex">
            <div className=" flex m-2 mt-0  h-13 dark:bg-slate-600 inverted-colors:to-black bg-slate-200 border-2 border-black rounded dark:border-slate-500">
                <Link
                    href="https://www.abuseipdb.com/user/248528"
                    title={ABOUT}
                >
                    <img
                        src="https://www.abuseipdb.com/contributor/248528.svg"
                        alt="Значок участника AbuseIPDB"
                        className="h-12"
                    />
                </Link>
            </div>
        </div>
    );
}
