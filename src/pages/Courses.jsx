import { useState } from "react";
import { Container, Heading, VStack, Box, Button, Text, useToast } from "@chakra-ui/react";

const coursesData = [
  { id: 1, title: "Introduction to JavaScript", description: "Learn the basics of JavaScript, the most popular programming language in web development." },
  { id: 2, title: "Advanced React", description: "Dive deep into React and learn advanced concepts and patterns for building scalable applications." },
  { id: 3, title: "Python for Data Science", description: "Master Python and its libraries to analyze data and build machine learning models." },
];

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const toast = useToast();

  const handleEnroll = (course) => {
    if (!enrolledCourses.includes(course.id)) {
      setEnrolledCourses([...enrolledCourses, course.id]);
      toast({
        title: "Enrollment Successful",
        description: `You have successfully enrolled in ${course.title}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Already Enrolled",
        description: `You are already enrolled in ${course.title}.`,
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={6}>Available Courses</Heading>
      <VStack spacing={6} width="100%">
        {coursesData.map((course) => (
          <Box key={course.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{course.title}</Heading>
            <Text mt={4}>{course.description}</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleEnroll(course)}>
              Enroll
            </Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Courses;