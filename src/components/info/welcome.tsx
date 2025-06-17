export function Welcome_for_home_page({ is_guest }: { is_guest: boolean }) {
    return is_guest ? (
        <div className=" m-2 font-medium">Добро пожаловать! </div>
    ) : (
        <div className=" m-2 font-medium">С возвращением! </div>
    );
}
