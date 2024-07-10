import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/*Search bar*/}
            <Box display="flex" backgroundColor={colors.primary[400]}></Box>
            <IconButton></IconButton>
        </Box>
    );
};

export default Topbar;
