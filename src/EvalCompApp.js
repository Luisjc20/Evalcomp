import React from 'react'
import { Provider } from 'react-redux';
import { ThemeProvider } from "@mui/material/styles";
import {LoginScreen} from "./components/auth/LoginScreen.js";
import theme from "./components/ui/Theme";
import { store } from './store/store';
import { AppRouter } from './router/AppRouter'


export const EvalCompApp = () => {
    return (
        <Provider store={ store }>
            <ThemeProvider theme={theme}>

                <AppRouter />

            </ThemeProvider>
        </Provider>
    )
}
