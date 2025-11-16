import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
export function calculateAndShowTimeAgo(date: Date | string) {
    return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ru,
    });
}
