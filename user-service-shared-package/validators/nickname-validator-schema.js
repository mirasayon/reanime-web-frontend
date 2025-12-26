import { z } from "zod";
export const nicknameRegex = /^[\p{L}\p{M}0-9 _'-]+$/u;
export const profileNicknameValidatorSchema = (() => {
    const name = "Никнейм";
    return z
        .string({
        error: `Требуется ${name}`,
    })
        .trim()
        .min(1, {
        error: `Требуется ${name}`,
    })
        .max(30, {
        error: `Слишком длинный никнейм (максимум 30 символов)`,
    })
        .refine((val) => val === val.normalize("NFC"), {
        error: "Никнейм содержит недопустимые символы",
    })
        .regex(nicknameRegex, {
        error: "Никнейм может содержать только буквы (любого языка), цифры, пробелы, дефисы, подчеркивания, апострофы",
    });
})();
