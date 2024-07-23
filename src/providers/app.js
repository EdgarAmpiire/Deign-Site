import * as React from "react";

import { BrowserRouter as Router } from "react-router-dom";

export const AppProvider = ({ children }) => {
    return (
        <React.Suspense>
            <Router>{children}</Router>
        </React.Suspense>
    )
}