const roadmapData = [
    {
        title: "Computer Science Core",
        description: "The absolute theoretical bedrock.",
        children: [
            { title: "Data Structures", description: "Trees, graphs, dynamic programming, heaps, hash maps." },
            { title: "Algorithms", description: "Sorting, searching, greedy, divide and conquer." },
            { title: "Object-Oriented Programming", description: "Classes, inheritance, polymorphism, encapsulation." },
            { title: "Operating Systems", description: "Process scheduling, threads, concurrency, memory management (paging, virtual memory)." },
            { title: "Computer Networks", description: "TCP/UDP, DNS, HTTP/3, WebSockets." },
            { title: "Database Management Systems", description: "ACID properties, transaction isolation, indexing (B-Trees)." },
            { title: "SQL", description: "Complex joins, window functions, query execution plans." },
            { title: "Compiler Design", description: "ASTs, lexing, parsing." },
            { title: "Computer Architecture", description: "CPU caching (L1/L2/L3), instruction pipelining, von Neumann." },
            { title: "Digital Logic", description: "Gates, boolean algebra, circuits." },
            { title: "Discrete Mathematics", description: "Set theory, graph theory, combinatorics." },
            { title: "Theory of Computation", description: "Automata, Turing machines." },
            { title: "Design and Analysis of Algorithms", description: "Time/space complexity, Big-O, NP-Completeness." },
            { title: "Software Engineering", description: "SDLC, Agile, SOLID principles, testing." },
            { title: "Distributed Systems", description: "CAP theorem, consensus algorithms (Raft/Paxos)." },
            { title: "Cloud Computing", description: "IaaS, PaaS, SaaS, AWS/GCP basics." },
            { title: "System Design", description: "Scalability, microservices, load balancing." },
            { title: "Linux", description: "Internals, permissions, file systems." },
            { title: "Shell Scripting", description: "Bash, awk, sed, text processing." },
            { title: "Git & GitHub", description: "Version control, branching, rebasing, CI hooks." },
            { title: "Docker", description: "Containerization, images, volumes, networking." },
            { title: "Kubernetes", description: "Orchestration, pods, deployments, services." },
            { title: "Virtualization", description: "Hypervisors, VMs vs Containers." },
            { title: "Networking Fundamentals", description: "Subnetting, routing, OSI model." },
            { title: "REST APIs", description: "Stateless architecture, verbs, idempotency." },
            { title: "GraphQL", description: "Schemas, resolvers, over-fetching solutions." },
            { title: "Authentication", description: "JWT, OAuth 2.0, SAML." },
            { title: "Security", description: "OWASP Top 10, CORS, XSS, CSRF." },
            { title: "Cryptography basics", description: "Symmetric/Asymmetric encryption, hashing." },
            { title: "Concurrency & Parallel Programming", description: "Locks, mutexes, deadlocks, race conditions." },
            { title: "Memory Management", description: "Garbage collection, pointers, heap vs stack." }
        ]
    },
    {
        title: "Programming",
        description: "Mastering the syntax and systems to build production-grade code.",
        children: [
            { title: "Advanced Python", description: "Metaclasses, asyncio, GIL, memory profiling." },
            { title: "Modern C++", description: "C++11/14/20: Smart pointers, move semantics, RAII." },
            { title: "Java (for interviews)", description: "Spring Boot, JVM garbage collection tuning." },
            { title: "Bash", description: "Automation and CI/CD scripting." },
            { title: "Code Quality & Best Practices", description: "Clean Code, DRY, KISS." },
            { title: "Testing", description: "Unit, integration, TDD, PyTest, JUnit." },
            { title: "Debugging & Profiling", description: "GDB, Valgrind, cProfile." },
            { title: "Optimization", description: "Latency reduction, CPU cache optimization." }
        ]
    },
    {
        title: "Mathematics",
        description: "The 'Why' behind every ML algorithm and neural network.",
        children: [
            { title: "Linear Algebra", description: "Vector spaces, SVD, eigenvectors. Why: Basis of network weights." },
            { title: "Calculus", description: "Multivariate, gradients, partial derivatives, chain rule. Why: Backpropagation." },
            { title: "Probability", description: "Bayes theorem, expected value. Why: Sampling, generative models." },
            { title: "Statistics", description: "Variance, std dev, distributions. Why: Loss functions, A/B testing." },
            { title: "Optimization", description: "Convex vs non-convex, Hessian. Why: Algorithm convergence (Adam, SGD)." },
            { title: "Numerical Methods", description: "Floating point arithmetic, stability." },
            { title: "Information Theory", description: "Entropy, KL Divergence. Why: Measuring data vs model distributions." }
        ]
    },
    {
        title: "Machine Learning",
        description: "Traditional ML algorithms and foundations.",
        children: [
            { title: "Supervised Learning", description: "Linear/Logistic regression, SVMs." },
            { title: "Unsupervised Learning", description: "K-Means, PCA, clustering." },
            { title: "Feature Engineering", description: "Imputation, scaling, encoding." },
            { title: "Evaluation", description: "Precision, Recall, F1, ROC-AUC." },
            { title: "Cross Validation", description: "K-fold, stratified splits." },
            { title: "Ensemble Methods", description: "Bagging vs Boosting, Random Forests." },
            { title: "XGBoost, LightGBM, CatBoost", description: "Gradient boosting mastery." },
            { title: "Time Series", description: "ARIMA, Prophet, seasonality." },
            { title: "Recommendation Systems", description: "Collaborative filtering, matrix factorization." }
        ]
    },
    {
        title: "Deep Learning",
        description: "Neural network architectures and deep tech.",
        children: [
            { title: "Neural Networks", description: "MLPs, activation functions, backprop from scratch." },
            { title: "PyTorch & TensorFlow", description: "Custom nn.Module, DataLoader optimization." },
            { title: "CNNs", description: "ResNet, pooling, feature maps." },
            { title: "RNN, LSTM, GRU", description: "Sequence modeling, vanishing gradients." },
            { title: "Transformers", description: "Self-attention, multi-head attention, positional encoding." },
            { title: "Vision Transformers", description: "ViT architecture." },
            { title: "GANs & Diffusion Models", description: "Generative networks, DDPM." }
        ]
    },
    {
        title: "Generative AI",
        description: "Modern LLMs and applied AI tooling.",
        children: [
            { title: "LLMs", description: "Architecture, tokenization." },
            { title: "Prompt Engineering", description: "Few-shot, chain-of-thought." },
            { title: "Fine-tuning (PEFT, LoRA, QLoRA)", description: "Parameter-efficient tuning." },
            { title: "RAG (Retrieval-Augmented Generation)", description: "Embeddings, chunking strategies." },
            { title: "LangChain & LlamaIndex", description: "Orchestration frameworks." },
            { title: "Vector Databases", description: "Pinecone, Milvus, HNSW search." },
            { title: "AI Agents & MCP", description: "ReAct framework, autonomous agents, Model Context Protocol." },
            { title: "Multimodal AI", description: "Vision-Language models." }
        ]
    },
    {
        title: "Specializations",
        description: "Niche domains for deep expertise.",
        children: [
            { title: "Computer Vision", description: "YOLO, segmentation, OpenCV." },
            { title: "Natural Language Processing", description: "BERT, word2vec, embeddings." },
            { title: "Speech AI", description: "Whisper, TTS, audio processing." },
            { title: "Reinforcement Learning", description: "Q-Learning, PPO, reward functions." },
            { title: "Graph Neural Networks", description: "Node embeddings, message passing." },
            { title: "AI Infrastructure", description: "GPU memory management, CUDA." }
        ]
    },
    {
        title: "MLOps",
        description: "Deploying and monitoring models at scale.",
        children: [
            { title: "MLflow & Weights & Biases", description: "Experiment tracking." },
            { title: "DVC (Data Version Control)", description: "Data and model lineage." },
            { title: "CI/CD for ML", description: "GitHub Actions, automated testing." },
            { title: "Cloud Platforms", description: "AWS SageMaker, Azure ML, GCP Vertex AI." },
            { title: "Model Deployment", description: "FastAPI, ONNX, TensorRT." },
            { title: "Monitoring", description: "Data drift, model degradation alerts." },
            { title: "Inference Optimization", description: "Quantization, FlashAttention, KV Caching." }
        ]
    },
    {
        title: "Software Engineering & System Design",
        description: "Building resilient distributed architectures.",
        children: [
            { title: "Clean Code & SOLID", description: "Maintainability principles." },
            { title: "Design Patterns", description: "Gang of Four patterns." },
            { title: "Microservices", description: "Event-driven architecture." },
            { title: "Caching", description: "Redis, Memcached, cache invalidation." },
            { title: "Message Queues", description: "Kafka, RabbitMQ, pub/sub." },
            { title: "High-Level & Low-Level Design", description: "UML, API design, capacity estimation." }
        ]
    },
    {
        title: "Projects",
        description: "50 strictly structured projects from foundation to advanced.",
        children: [
            { title: "1. Custom Memory Allocator", difficulty: "Hard", tech: "C, OS", time: "2 weeks" },
            { title: "2. Key-Value Store", difficulty: "Medium", tech: "C++, Caching", time: "1 week" },
            { title: "3. HTTP Web Server", difficulty: "Medium", tech: "C, Networks", time: "2 weeks" },
            { title: "4. Thread Pool Library", difficulty: "Medium", tech: "C++, Concurrency", time: "1 week" },
            { title: "5. CLI Task Manager", difficulty: "Easy", tech: "Python, SQLite", time: "3 days" },
            { title: "6. SQL Query Parser", difficulty: "Hard", tech: "Java, Compilers", time: "3 weeks" },
            { title: "7. Load Balancer", difficulty: "Hard", tech: "Go/C++, SysDesign", time: "2 weeks" },
            { title: "8. Rate Limiter API", difficulty: "Medium", tech: "Java/Redis", time: "1 week" },
            { title: "9. Chat Server", difficulty: "Medium", tech: "Python, WebSockets", time: "1 week" },
            { title: "10. Distributed Cron", difficulty: "Hard", tech: "Go, DistSys", time: "3 weeks" },
            { title: "11. URL Shortener", difficulty: "Easy", tech: "Python, Redis", time: "4 days" },
            { title: "12. File Compression Tool", difficulty: "Medium", tech: "C, Algos", time: "2 weeks" },
            { title: "13. Regex Engine", difficulty: "Hard", tech: "C++, Automata", time: "3 weeks" },
            { title: "14. Custom Git", difficulty: "Hard", tech: "Python, OS", time: "2 weeks" },
            { title: "15. Consistent Hash Ring", difficulty: "Medium", tech: "Java, DistSys", time: "1 week" },
            { title: "16. Decision Tree from Scratch", difficulty: "Medium", tech: "Python, NumPy", time: "1 week" },
            { title: "17. House Price Predictor", difficulty: "Easy", tech: "XGBoost, Streamlit", time: "4 days" },
            { title: "18. Customer Churn API", difficulty: "Medium", tech: "LightGBM, FastAPI", time: "1 week" },
            { title: "19. Recommendation Engine", difficulty: "Medium", tech: "Python, Spark", time: "2 weeks" },
            { title: "20. Time Series Forecaster", difficulty: "Medium", tech: "Python, Stats", time: "1 week" },
            { title: "21. Credit Card Fraud Detection", difficulty: "Medium", tech: "CatBoost, ML", time: "1 week" },
            { title: "22. A/B Testing Framework", difficulty: "Medium", tech: "Python, Stats", time: "1 week" },
            { title: "23. Data Pipeline CLI", difficulty: "Medium", tech: "Bash, Python", time: "1 week" },
            { title: "24. K-Means Clustering Viz", difficulty: "Easy", tech: "Python, D3", time: "5 days" },
            { title: "25. Gradient Descent Visualizer", difficulty: "Medium", tech: "Python, Math", time: "1 week" },
            { title: "26. Autograd Engine", difficulty: "Hard", tech: "Python, Math", time: "2 weeks" },
            { title: "27. ResNet from Scratch", difficulty: "Medium", tech: "PyTorch, CV", time: "1 week" },
            { title: "28. Style Transfer App", difficulty: "Medium", tech: "PyTorch, CV", time: "2 weeks" },
            { title: "29. Facial Keypoint Detector", difficulty: "Medium", tech: "PyTorch, CNN", time: "2 weeks" },
            { title: "30. Object Detection (YOLO)", difficulty: "Hard", tech: "PyTorch, AWS", time: "3 weeks" },
            { title: "31. GAN Digit Generator", difficulty: "Medium", tech: "PyTorch, GenAI", time: "1 week" },
            { title: "32. Image Segmentation", difficulty: "Hard", tech: "U-Net, CV", time: "2 weeks" },
            { title: "33. Diffusion Model (Toy)", difficulty: "Hard", tech: "PyTorch, GenAI", time: "3 weeks" },
            { title: "34. OCR Pipeline", difficulty: "Medium", tech: "Tesseract, CV2", time: "1 week" },
            { title: "35. Video Action Recognition", difficulty: "Hard", tech: "3D-CNN, CV", time: "3 weeks" },
            { title: "36. Word2Vec from Scratch", difficulty: "Medium", tech: "PyTorch, NLP", time: "1 week" },
            { title: "37. Sentiment Analysis API", difficulty: "Easy", tech: "BERT, FastAPI", time: "5 days" },
            { title: "38. Transformer from Scratch", difficulty: "Hard", tech: "PyTorch, DL", time: "2 weeks" },
            { title: "39. RAG Document Q&A", difficulty: "Medium", tech: "LangChain, Pinecone", time: "1 week" },
            { title: "40. Local LLM Finetune (LoRA)", difficulty: "Hard", tech: "PyTorch, HuggingFace", time: "2 weeks" },
            { title: "41. Multi-Agent Coding Assistant", difficulty: "Hard", tech: "Python, ReAct", time: "2 weeks" },
            { title: "42. Voice Transcription Bot", difficulty: "Medium", tech: "Whisper, Telegram", time: "1 week" },
            { title: "43. Text-to-SQL Generator", difficulty: "Medium", tech: "OpenAI API, LLM", time: "1 week" },
            { title: "44. MLflow Tracking Server", difficulty: "Medium", tech: "MLOps, AWS/EC2", time: "1 week" },
            { title: "45. Model Drift Monitor", difficulty: "Hard", tech: "Python, MLOps, Docker", time: "2 weeks" },
            { title: "46. Kubernetes Model Serving", difficulty: "Hard", tech: "K8s, Docker, GCP", time: "3 weeks" },
            { title: "47. Triton Inference Server", difficulty: "Hard", tech: "C++, CUDA", time: "2 weeks" },
            { title: "48. Vector Search Engine", difficulty: "Hard", tech: "C++, Algos", time: "4 weeks" },
            { title: "49. AI Code Reviewer", difficulty: "Medium", tech: "GitHub Actions, LLM", time: "1 week" },
            { title: "50. End-to-End MLOps Pipeline", difficulty: "Extreme", tech: "Full Stack, Cloud", time: "4 weeks" }
        ]
    },
    {
        title: "Interview Preparation",
        description: "Cracking the FAANG and HFT interviews.",
        children: [
            { title: "DSA Roadmap (NeetCode 150)", description: "Sliding window, two pointers, back-tracking patterns." },
            { title: "Competitive Programming", description: "Codeforces Div 3/4 for speed." },
            { title: "System Design Interviews", description: "Whiteboarding, capacity planning, Kleppmann's book." },
            { title: "ML/DL System Design", description: "Serving constraints, latency tradeoffs, L1/L2 regularization theory." },
            { title: "Behavioral Interviews", description: "STAR method, conflict resolution." }
        ]
    }
];
