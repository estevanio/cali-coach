"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import Hero from "@/app/ui/home/Hero";
import How from "@/app/ui/home/How";
import Why from "@/app/ui/home/Why";

const content = {
  headline: "Donate your car today and fuel a greener tomorrow.",
  message: "Join the Cars2Trees journey!",
  why: {
    title: "Why choose Cars2Trees?",
    subtitle: "Planting forests together!",
    items: [
      {
        label: "Straightforward",
        description:
          "Once you reach out to us, we arrange a pickup for your vehicle at a date & time that's most suitable for you. We have been experts in vehicle donation for over 20 years. "
      },
      {
        label: "Swift, NO-COST Pickup",
        description:
          "There are absolutely NO charges for donating your vehicle, no matter its condition or registration status. By doing so, you're directly contributing to global reforestation and a healthier environment."
      },
      {
        label: "Reclaim Your  Space",
        description:
          "Skip the challenges of selling your car. Convert that vehicle into a valuable tax deduction. Say goodbye to costly vehicle maintenance bills and declutter your driveway or garage."
      },

      {
        label: "We Manage All the Documentation",
        description:
          "During the pickup, we provide you with a tax receipt, which also acts as a release of liability and confirmation of the collection. Leave the concerns about DMV, Title, or any other paperwork to us! "
      },
      {
        label: "Avail a Generous Tax Benefit ",
        description:
          "Being an IRS approved 501(c)(3) Non Profit, you're ensured the maximum tax deduction for your kind vehicle donation."
      },
      {
        label: "Promote a Greener Tomorrow",
        description:
          "Your thoughtful vehicle donation aids us in our mission to plant trees, combating deforestation and making the world a cleaner, greener place for everyone."
      }
    ]
  },
  how: {
    title: "How it works",
    subtitle: "We make it quick and simple!",
    items: [
      {
        title: "Contact Us by Call or Email:",
        subtitle:
          "Reach out to us either by phone or email to initiate the donation process. Our dedicated team is always ready to assist you."
      },
      {
        title: "We’ll Send a Truck to Tow It Away:",
        subtitle:
          "Once you've decided to donate, we'll dispatch a tow truck to your location to pick up the vehicle, ensuring a hassle-free experience for you. It's the beginning of an exciting journey – from driveway to new forests!"
      },
      {
        title: "Provide Donation Receipt Documents:",
        subtitle: `Following the pickup, we'll provide you with an official donation receipt, marking your generous step towards a greener planet. It's our little way of saying, "Thank you for making the world a greener place!"`
      },
      {
        title: "Sell as-is or Improve Vehicle for Sale:",
        subtitle:
          "Depending on the condition of the donated vehicle, we will either sell it as-is or make necessary improvements to enhance its value. Rest assured, all vehicles are sold in a fair and competitive environment to fetch the best possible price. Remember, the higher the sale price of the vehicle, the more substantial the contribution towards our tree-planting initiative."
      },
      {
        title: "Your Green Footprint - The Closure Letter:",
        subtitle:
          "To keep you informed and maintain transparency, we'll send you a closure letter detailing the final sale price of your donated car. Here's the magical part! We'll include a special note revealing just how many trees your car is planting, and the exact spot where your trees will take root!"
      }
    ]
  }
};

const HomePage = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
          marginTop: -13,
          paddingTop: 13
        }}
      >
        <Hero headline={content.headline} message={content.message} />
      </Box>

      <Why {...content.why} />

      <How {...content.how} />
    </>
  );
};

export default HomePage;
