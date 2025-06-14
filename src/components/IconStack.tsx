import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";


interface IconStackProps{
  icons: React.ReactNode[];
  iconText: [];
}

const IconStack = ({icons, iconText}: IconStackProps) => {
  return (
    <div className="flex flex-row w-full h-full items-center justify-evenly py-12">

      <div className="inline-flex w-fit">
        <ThemeProvider theme={theme}>
          <Stack alignItems="center" direction={"row"} spacing={2}>
            {icons.map((icon, index) => (
              <Box
                key={index}
                
                className="bg-white/13 border border-gray-200/25 backdrop-blur-sm shadow-lg"
  
                sx={{
                  color:"white", 
                  p: 1,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 2,
                }}
              >
                {icon}
                {iconText}
              </Box>
            ))}
          </Stack>
        </ThemeProvider>
      </div>
    </div>
  );
};

const theme = createTheme({
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          height: "fit-content",
          borderRadius: 10,
          padding: 8,
        },
      },
    },
  },
});

export default IconStack;
