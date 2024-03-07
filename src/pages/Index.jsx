import React, { useState } from "react";
import { Box, VStack, HStack, Avatar, Text, Heading, Textarea, Button, Divider, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      setTweets([...tweets, { id: Date.now(), content: newTweet }]);
      setNewTweet("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" py={8}>
      <HStack justify="space-between" mb={8}>
        <FaTwitter size={32} color="#1DA1F2" />
        <HStack spacing={4}>
          <IconButton icon={<FaHome />} variant="ghost" />
          <IconButton icon={<FaBell />} variant="ghost" />
          <IconButton icon={<FaEnvelope />} variant="ghost" />
          <IconButton icon={<FaUser />} variant="ghost" />
        </HStack>
      </HStack>

      <Box mb={8}>
        <HStack mb={4}>
          <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Textarea value={newTweet} onChange={(e) => setNewTweet(e.target.value)} placeholder="What's happening?" resize="none" rows={3} />
        </HStack>
        <Button colorScheme="twitter" onClick={handleTweetSubmit} isDisabled={newTweet.trim() === ""}>
          Tweet
        </Button>
      </Box>

      <VStack spacing={4} align="stretch">
        {tweets.map((tweet) => (
          <Box key={tweet.id} borderWidth={1} borderRadius="md" p={4}>
            <HStack mb={2}>
              <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" size="sm" />
              <Text fontWeight="bold">User</Text>
            </HStack>
            <Text>{tweet.content}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
