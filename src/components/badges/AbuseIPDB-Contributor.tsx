import type React from "react";
import Link from "next/link";
import type { JSX } from "react";

export function AbuseIpDbContributor(): JSX.Element {
    return (
        <div className=" flex p-4">
            <Link
                href="https://www.abuseipdb.com/user/248528"
                title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
            >
                <img
                    src="https://www.abuseipdb.com/contributor/248528.svg"
                    alt="AbuseIPDB Contributor Badge"
                    className="w-40 p-1 dark:bg-blue-100 bg-white border-2 border-black rounded dark:border-slate-500"
                />
            </Link>
        </div>
    );
}
