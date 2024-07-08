const Dashboard = () => {
    return (
        <div>
            Dashboard
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <main className="content"></main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
};

export default Dashboard;
