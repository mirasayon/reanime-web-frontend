export function LabelComponentForAuthForms({ labelText }: { labelText: string }) {
    return (
        <label htmlFor={labelText} className="dark:text-slate-400 text-slate-900">
            {labelText}
        </label>
    );
}
