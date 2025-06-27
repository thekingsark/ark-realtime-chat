import { Box, Grid, GridItem } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import MessageForm from "../components/MessageForm";
export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <MessageForm />

      <Grid
        gridTemplateColumns="auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px="30px"
        height="40px"
        bg="white"
      >
        <GridItem justifySelf="start">
          {/* Built by{" "} */}
          {/* <a href="https://ark-realtime-chat.vercel.app" target="_blank"> */}
          <a
            href="https://kingsideaconnections.org/thekingsark"
            target="_blank"
            rel="noreferrer"
          >
            <FaFlag on fa-circle style={{ display: "inline" }} />
            @thekingsark
          </a>
        </GridItem>
        <GridItem justifySelf="end">
          <a
            href="https://thekingsark.world"
            target="_blank"
            rel="noreferrer"
          >
            <FaFlag style={{ display: "inline" }} /> Powered By The Kings Ark™
          </a>
        </GridItem>
      </Grid>
    </Box>
  );
}
