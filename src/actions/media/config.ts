export const userServiceMediaConfigs = {
    avatar_file_name: "r6_one_avatar_image_file",
    avatar_file_name_for_user_service: "one_image_file",
    avatar_file_HTML_INPUT_name: "r6_avatar_file",
} as const;
export type UserServiceMediaConfigs = (typeof userServiceMediaConfigs)[keyof typeof userServiceMediaConfigs];
export const SUPPORTED_AVATAR_IMAGE_FORMATS = ["image/png", "image/jpeg", "image/jpg"];
