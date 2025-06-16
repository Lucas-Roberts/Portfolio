import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ProjectStackProps {
  Project: string[];
  ProjectDesc: string[];
  ProjectImg: string[];
}

const ProjectCardStack = (
  //{
//   Project,
//   ProjectDesc,
//   ProjectImg,
// }: ProjectStackProps
) => {
  return (
    // <Stack direction={"row"} flexWrap={"wrap"} rowGap={1} spacing={3}>
    //   {Project.map((Project, index) => (
    //     <Card
    //       key={index}
    //       sx={{
    //         color: "white",
    //         borderRadius: 2,
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         boxShadow: 2,
    //         width: 380,
    //         height: 500,
    //       }}
    //     >
    //       <div>
    //         <div className="flex overflow-hidden w-full h-60 ratio-video border border-amber-300">
    //           <CardMedia
    //             component={"img"}
                
              
                
    //           ></CardMedia>
    //         </div>

    //         <div className="flex bg-amber-300 h-40 ">
    //           {Project}

    //           {ProjectDesc[index]}
    //         </div>
    //       </div>
    //     </Card>
    //   ))}
    // </Stack>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/IMG_4126.png"
        title="green iguana"
      />
      <CardContent>

        <h2>
          Lizard
        </h2>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCardStack;
