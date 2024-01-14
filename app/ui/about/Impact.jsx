"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";


import Typography from "@mui/material/Typography";

const Copy = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={"subtitle1"}>{content.intro}</Typography>
        <Box width={1} height={1} marginY={4}>
          <img
            height={"100%"}
            width={"100%"}
            src={"https://assets.maccarianagency.com/backgrounds/img4.jpg"}
            alt="Remote working"
            loading="lazy"
            style={{
              filter:
                theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
              objectFit: "cover",
              borderRadius: 8,
              width: "100%",
              height: "100%",
              maxHeight: 400
            }}
          />
        </Box>
        <Box marginY={4}>
          {content.items.map((item, index) => (
            <React.Fragment key={index}>
              <Typography variant={"h5"} gutterBottom>
                {item.label}
              </Typography>
              <Typography>{item.description}</Typography>
            </React.Fragment>
          ))}
        </Box>
        {/* Fancy Quote Text Below */}
        <Typography
          variant={"h4"}
          color={"primary"}
          align={"center"}
          fontWeight={"normal"}
        >
          {content.outro}
        </Typography>
      </Box>

      <Box>
        <Divider />
      </Box>
    </Box>
  );
};

const content = {
  title: "Our Impact",
  intro:
    "Your donation does more than just plant trees; it sustains life, improves air quality, and combats climate change, creating a ripple effect of positive change in our environment. Together, let's create a legacy of green for generations to come. Picture this: lush, verdant forests teeming with life, a symphony of birdsong filling the air, and the gentle rustling of leaves as the wind dances through. Now, contrast that with the devastating sight of charred woodlands, clear-cut patches, and landscapes devoid of the vibrant life they once held. These are the two realities of our world today, and the difference is our actions.",
  outro: `Act Now.
    Donate your car, fuel our mission, and together, let's paint the world green! 🌍🌱🌳`,
  items: [
    {
      label: "Our Promise to Tomorrow:",
      description:
        "Every car you donate brings us closer to restoring the beauty of our natural world. Especially in our beloved California, where our primary efforts are concentrated. However, if your heart beats for the Amazon, Appalachians, or any other place that needs our green touch, we'll make sure your contribution reaches there."
    },
    {
      label: "More Than Just Trees:",
      description:
        "For every dollar from the proceeds, a tree finds its roots. But it's not just about the numbers. Each tree serves as a beacon of hope, tirelessly working to sequester emitted carbons. If you've ever wondered about the magic of carbon sequestration, trees are the unsung heroes. Through their leaves, roots, and bark, they capture and store harmful CO2, playing a critical role in our fight against climate change."
    },
    {
      label: "Rehabilitating Our World:",
      description:
        "Beyond carbon, trees are the architects of rehabilitation. They prevent soil erosion, restore habitats, and bring back the harmony that often gets disrupted. They're not just trees; they're guardians of our environment."
    },
    {
      label: "Where We Step In:",
      description:
        "As you look into the eyes of the next generation, know that our mission goes beyond today. This is about ensuring that our children, and their children, inherit a world that's as beautiful, if not more, than what we've seen. It's about shared values, a collective responsibility, and a heartfelt promise."
    },
    {
      label: "Your Role in This Epic Tale:",
      description:
        "The canvas of nature is vast, but every stroke counts. Every tree you help us plant is a testament to the indomitable spirit of conservation. Together, we're not just planting trees; we're sowing the seeds of a brighter, greener future."
    },
    {
      label: "Let's Make a Difference:",
      description:
        "The journey might be long, but with your support, every step becomes a leap. Let the stories of nature, the urgency of climate change, and our unwavering responsibility inspire you. Because when the call of the wild beckons, it's not just an echo of nature; it's an invitation to make a difference."
    }
  ]
};

const Impact = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1)
          }}
        >
          Our Impact
        </Typography>
      </Box>
      <Copy />
    </Box>
  );
};

export default Impact;
