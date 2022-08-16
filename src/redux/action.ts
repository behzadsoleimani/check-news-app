export const THEME_MODE = "THEME_MODE";

export const changeThemeMode = (value: boolean) => (
    { type: THEME_MODE, payload: { value } }
    );
