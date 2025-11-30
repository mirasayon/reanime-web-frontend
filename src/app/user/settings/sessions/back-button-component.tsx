import { Linker } from "#/components/utilities/common/linker-utility-component";

export function BackToUserPageButtonComponent({
    username,
}: {
    username: string;
}) {
    return (
        <Linker
            href={"/user/" + username}
            clearTheDefaultStylings
            className="p-1 hover:underline border-2 w-max rounded"
        >
            ←Назад
        </Linker>
    );
}
