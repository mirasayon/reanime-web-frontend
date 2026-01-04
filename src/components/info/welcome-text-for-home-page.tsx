export function Welcome_for_home_page({ logged }: { logged: boolean }) {
    return !logged ? (
        <div className=" m-2 font-medium">Добро пожаловать! </div>
    ) : (
        <div className=" m-2 font-medium">С возвращением! </div>
    );
}
