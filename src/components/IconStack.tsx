import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export interface IconData {
  icon: React.ReactNode;
  text?: string;
  isLink: boolean;
  link?: string;
}

interface IconStackProps {
  iconData: IconData[];
}

const IconStack = ({ iconData }: IconStackProps) => {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" rowGap={1}>
      {iconData.map((data, index) => {
        const content = (
          <>
            {data.icon}
            {data.text && <span className="pl-1">{data.text}</span>}
          </>
        );

        return (
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
              cursor: data.isLink ? "pointer" : "default",
            }}
          >
            {data.isLink ? (
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default IconStack;


