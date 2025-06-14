import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface IconStackProps {
  icons: React.ReactNode[];
  iconText: string[];
}

const IconStack = ({ icons, iconText }: IconStackProps) => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} rowGap={1} spacing={2}>
      {icons.map((icon, index) => (
        <Box
          key={index}
          className="bg-white/13 border border-gray-200/25 backdrop-blur-sm shadow-lg"
          sx={{
            color: "white",
            p: 1,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 2,
          }}
        >
          {icon}
          <span className="pl-1">{iconText[index]}</span>
        </Box>
      ))}
    </Stack>
  );
};

export default IconStack;
