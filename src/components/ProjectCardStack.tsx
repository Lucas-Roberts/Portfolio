import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface ProjectStackProps {
  Project: string[];
  ProjectDesc: string[];
}

const ProjectCardStack = ({ Project, ProjectDesc }: ProjectStackProps) => {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} rowGap={1} spacing={2}>
      {Project.map((Project, index) => (
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
            width: 380,
            height: 500,
          }}
        >
          
        
          {Project}
          {ProjectDesc[index]}


          
        </Box>
      ))}
    </Stack>
  );
};

export default ProjectCardStack;