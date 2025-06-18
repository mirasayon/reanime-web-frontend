class WebsiteConfigsClass {
    public_domain = "reanime.art" as const;
    birth_year = 2024 as const;
    name = "REAnime" as const;
    mail = "send@reanime.art" as const;
    devs_mail = "mirasayon@ya.ru" as const;
    normalized_name = "REAnime" as const;
    public_full_domain = "https://reanime.art" as const;
    cyrillic_name = "реаниме" as const;
    cyrillic_normalized_name = "РЕАниме" as const;
    full_domain_URL: URL = new URL(this.public_full_domain);
    developer_website = "https://mirasayon.com/";
}
export const WebsiteConfigs = new WebsiteConfigsClass();
