import { THEME_MODE } from "./action";


const data = (state: any = {
  themeMode: undefined
}, { type, payload }: any) => {
  switch (type) {
    case THEME_MODE:
      localStorage.setItem("theme-mode", JSON.stringify(payload.value ? "dark" : "light"))
      return { ...state, themeMode: payload.value ? "dark" : "light" };
    default:
      return state;
  }
};



export default data;