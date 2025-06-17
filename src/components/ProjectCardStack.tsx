import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { alpha } from "@mui/material";

interface ProjectCard {
  name: string;
  description: string;
  image: string;
  liveLink: string;
  sourceCodeLink: string;
}

interface ProjectCardStackProps {
  projectCardData: ProjectCard[];
}

const ProjectCardStack = ({ projectCardData }: ProjectCardStackProps) => {
  return (
    <Stack direction="row" flexWrap="wrap" rowGap={1} spacing={4}>
      {projectCardData.map((project, index) => (
        <Card
          key={index}
          
          sx={{
            background: alpha("#ffffff" ,0.13),
            width: 345,
            borderRadius: 3,
            border: 1,
            borderColor: alpha("#e5e7eb", 0.25),
          }}
        >
          <CardMedia
            
            component="img"
            image={project.image}
            title={project.name}
            sx={{
              height: 300, // fixed height for image container
              width: "100%",
              objectFit: "cover", // maintain aspect ratio & crop overflow
              background: "black"
            }}
          />
          <CardContent>
            <h2 className="text-white font-bold text-2xl ">{project.name}</h2>
            <p className="text-white font-semibold leading-5 ">{project.description}</p>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Button>
            <Button
              size="small"
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};

export default ProjectCardStack;
