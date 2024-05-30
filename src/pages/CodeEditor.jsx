import React, { useState } from "react";
import { Container, Heading, VStack, Button, Select, Box } from "@chakra-ui/react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  const runCode = () => {
    // Basic code execution logic
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      alert(result);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={6}>Code Editor</Heading>
      <VStack spacing={4} width="100%">
        <Select value={language} onChange={(e) => setLanguage(e.target.value)} mb={4}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="xml">HTML</option>
          <option value="css">CSS</option>
        </Select>
        <Box width="100%" borderWidth="1px" borderRadius="md" overflow="hidden">
          <CodeMirror
            value={code}
            options={{
              mode: language,
              theme: "material",
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
          />
        </Box>
        <Button colorScheme="teal" onClick={runCode}>Run Code</Button>
      </VStack>
    </Container>
  );
};

export default CodeEditor;