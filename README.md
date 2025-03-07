# Text Summarization Web Extension

## Overview
The **Text Summarization Web Extension** is a browser extension designed to help users efficiently summarize large amounts of text. This tool is particularly beneficial for neurodivergent individuals, enabling them to process and comprehend content more effectively. By utilizing advanced natural language processing techniques, the extension generates concise summaries while preserving key information.

## Features
- **Instant Summarization**: Quickly condense large text into key points.
- **User-Friendly Interface**: Simple and intuitive design for seamless usage.
- **Neurodivergent-Friendly**: Tailored for individuals who benefit from summarized content.
- **Browser Integration**: Works directly within web pages for easy access.
- **Read Summary Button**: Allows users to listen to the summary if they prefer auditory learning.
- **Command-Line Support**: Users can also summarize text using API requests.

## Installation
1. Download the extension from the repository.
2. Navigate to your browser’s extensions settings.
3. Enable developer mode and load the unpacked extension folder.
4. Start using the summarization tool on any webpage.

## Usage
### Browser Extension
1. Select the text you want to summarize.
2. Click on the extension icon in the browser toolbar.
3. View the summarized version instantly.
4. Click the **Read Summary** button to hear the summarized content.

### Command-Line Interface
You can also use the summarization service via the command line using **cURL**:
```
curl -X POST http://127.0.0.1:5000/summarize -H "Content-Type: application/json" -d '{ "text": "Your long text here..." }'
```
Example:
```
curl -X POST http://127.0.0.1:5001/summarize -H "Content-Type: application/json" -d '{ "text": "In machine learning, a neural network is an artificial mathematical model used to approximate nonlinear functions. While early artificial neural networks were physical machines, today they are almost always implemented in software. Neurons in an artificial neural network are usually arranged into layers, with information passing from the first layer (the input layer) through one or more intermediate layers (the hidden layers) to the final layer (the output layer). The signal input to each neuron is a number, specifically a linear combination of the outputs of the connected neurons in the previous layer. The signal each neuron outputs is calculated from this number, according to its activation function. The behavior of the network depends on the strengths (or weights) of the connections between neurons. A network is trained by modifying these weights through empirical risk minimization or backpropagation in order to fit some preexisting dataset. Neural networks are used to solve problems in artificial intelligence, and have thereby found applications in many disciplines, including predictive modeling, adaptive control, facial recognition, handwriting recognition, general game playing, and generative AI." }'
```

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python for NLP processing
- **Libraries**: NLP-based models for text summarization and text-to-speech (TTS) for reading summaries.

## Contributing
We welcome contributions! If you’d like to enhance the extension, follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with your improvements.

## License
This project is open-source and available under the MIT License.

## Contact
For any inquiries or suggestions, please reach out via [GitHub Issues](https://github.com/prajhverma12/text-Summarization/issues).

