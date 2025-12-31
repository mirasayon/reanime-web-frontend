import Link from "next/link";
import type { JSX } from "react";
const aboutTxt =
    "AbuseIPDB — это черный список IP-адресов, предназначенный для веб-мастеров и системных администраторов, которые могут сообщать об IP-адресах, участвующих в злонамеренных действиях в их сетях.";
export function AbuseIpDbContributorInfoBadge(): React.JSX.Element {
    return (
        <div className=" flex">
            <div className=" flex m-1 h-10 items-center justify-center dark:bg-slate-500 inverted-colors:to-black bg-slate-200 border-2 border-black rounded dark:border-slate-400">
                <Link prefetch={false} href="https://www.abuseipdb.com/user/248528" title={aboutTxt}>
                    <img
                        src="https://www.abuseipdb.com/contributor/248528.svg"
                        alt="Значок участника AbuseIPDB"
                        className="h-9"
                    />
                </Link>
            </div>
        </div>
    );
}
