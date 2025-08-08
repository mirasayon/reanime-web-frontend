import { JSX } from "react";

type Props = {};
export function TestModeBanner({}: Props): JSX.Element {
    return <div className="p-2 pt-3 text-red-500">Сайт работает в тестовом режиме!</div>;
}
