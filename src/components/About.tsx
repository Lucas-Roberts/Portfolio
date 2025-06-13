import { FaReact, FaCss3Alt, FaHtml5, FaPython } from "react-icons/fa";
import { SiTypescript, SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const icons = [
  <FaReact size={32} key="react" />,
  <SiTypescript size={32} key="ts" />,
  <SiFlask size={32} key="flask" />,
  <FaCss3Alt size={32} key="css" />,
  <FaHtml5 size={32} key="html" />,
  <FaPython size={32} key="python" />,
  <RiTailwindCssFill size={32} key="tailwind" />,
];

const About = () => {
  return (
    <div className="flex flex-row w-full h-full items-center justify-evenly py-12">
      {/* Profile Image */}

      {/* Stack Icon Section */}
      <div className="inline-flex w-fit">
        <ThemeProvider theme={theme}>
          <Stack alignItems="center" spacing={2}>
            {icons.map((icon, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#abc273",
                  p: 1,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 2,
                }}
              >
                {icon}
              </Box>
            ))}
          </Stack>
        </ThemeProvider>
      </div>

      <div className="border-2 h-full w-130 border-amber-400 p-10" >
        <h2 className="text-white font-bold text-2xl ">About Me</h2>
        <p className="text-white">  I enjoy building projects that focus on usability, repsonsivness and attention to detail. All of the projects that you will see are fully deployed, I hope by looking at my projects you get a feel for who I am; an inquistive programmer that loves to solve problems!
        </p>
        
      </div>

            <div className="border-8 w-110 border-amber-300">
        <img
          className="w-full rounded-3xl shadow-2xl"
          src="/images/IMG_4126.png"
          alt="Profile"
        />
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

export default About;

