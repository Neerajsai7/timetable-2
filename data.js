const roadmapData = [
    {
        title: "Stage 1: Core Foundations",
        description: "The mathematical and computer science bedrock required before writing any complex systems or AI.",
        children: [
            { title: "Mathematics for ML", description: "Linear Algebra (Vectors, Matrices, Eigenvalues), Calculus (Partial derivatives, Gradients), Probability & Statistics (Distributions, Bayes, Variance)." },
            { title: "Data Structures", description: "Arrays, Linked Lists, Hash Maps, Trees, Graphs, Heaps." },
            { title: "Algorithms", description: "Time/Space Complexity (Big-O), Sorting, Binary Search, Dynamic Programming, Graph Traversal (BFS/DFS)." },
            { title: "Linux & Git", description: "CLI navigation, permissions, bash scripting, branching, merging, resolving conflicts." }
        ]
    },
    {
        title: "Stage 2: Java Backend Systems",
        description: "Building robust, enterprise-grade data engines and APIs using the JVM ecosystem.",
        children: [
            { title: "Advanced Core Java", description: "JVM internals (Garbage Collection, Memory Model), Streams API, Multithreading & Concurrency (java.util.concurrent), Exceptions." },
            { title: "Relational Databases (SQL)", description: "PostgreSQL, ACID properties, normalization, complex joins, B-Tree indexing, execution plans." },
            { title: "Spring Ecosystem", description: "Dependency Injection (IoC), Spring Boot auto-configuration, Spring Web (REST APIs), Spring Security (JWT/OAuth2)." },
            { title: "Data Access", description: "Hibernate, JPA (Java Persistence API), handling N+1 query problems, connection pooling." },
            { title: "Build & Test Tools", description: "Maven/Gradle for dependency management. JUnit 5 and Mockito for unit and integration testing." },
            { title: "Containerization", description: "Dockerizing Java applications, multi-stage builds, minimizing JVM image sizes." }
        ]
    },
    {
        title: "Stage 3: Machine Learning Fundamentals",
        description: "Solving problems with data, statistics, and traditional ML. (Shift to Python here).",
        children: [
            { title: "Data Processing (Python)", description: "Pandas, NumPy, handling missing data, outlier detection, data leakage prevention." },
            { title: "Feature Engineering", description: "One-hot encoding, scaling/normalization, dimensionality reduction (PCA)." },
            { title: "Supervised & Unsupervised Learning", description: "Linear/Logistic Regression, K-Means Clustering, SVMs." },
            { title: "Tree-Based Models", description: "Decision Trees, Random Forests, Gradient Boosting (XGBoost, LightGBM)." },
            { title: "Model Evaluation", description: "Train/Test/Validation splits, K-Fold Cross Validation, Precision/Recall, ROC-AUC, F1 Score." }
        ]
    },
    {
        title: "Stage 4: Deep Learning & Applied AI",
        description: "Neural architectures and generative AI implementations. (Python).",
        children: [
            { title: "Neural Network Core", description: "Forward propagation, Backpropagation (deriving gradients), Loss functions (Cross-Entropy, MSE), Optimizers (Adam, SGD)." },
            { title: "Deep Learning Frameworks", description: "PyTorch: Tensors, Autograd, custom nn.Module, DataLoaders, GPU memory management." },
            { title: "Architectures", description: "CNNs for spatial data (ResNet), Sequence models for temporal data (RNN/LSTM)." },
            { title: "Transformers & LLMs", description: "Self-Attention mechanism, Positional Encoding, interacting with open-weight models (HuggingFace)." },
            { title: "Applied Generative AI", description: "Vector Databases (Milvus/Pinecone), Embeddings, RAG (Retrieval-Augmented Generation), Parameter-Efficient Fine-Tuning (LoRA)." }
        ]
    },
    {
        title: "Stage 5: Production, Scale & Polyglot Architecture",
        description: "Deploying models and bridging your Java backend with your Python ML services.",
        children: [
            { title: "System Design Basics", description: "Monolith vs Microservices, CAP Theorem, Horizontal vs Vertical scaling, Load Balancing." },
            { title: "Asynchronous Architecture", description: "Message Queues (Kafka/RabbitMQ) to decouple fast Java APIs from slow Python ML inference." },
            { title: "Caching Strategies", description: "Redis, in-memory datastores, cache invalidation, reducing Postgres load." },
            { title: "Model Serving & Optimization", description: "Exporting models to ONNX/TensorRT, serving via Triton or FastAPI, batching inference requests." },
            { title: "MLOps & CI/CD", description: "Experiment tracking (MLflow), Data versioning (DVC), GitHub Actions for testing both Java and Python codebases." }
        ]
    },
    {
        title: "Capstone Projects",
        description: "High-impact, end-to-end systems to prove competence across both stacks.",
        children: [
            { title: "1. Spring Boot E-Commerce Engine", description: "Core backend with Spring Boot, Hibernate, and Postgres. (Tests: Java, APIs, DB Design, Security)" },
            { title: "2. Automated Fraud Pipeline", description: "End-to-end XGBoost model with SMOTE and MLflow. (Tests: Python, Data Cleaning, ML, Evaluation)" },
            { title: "3. GPU-Accelerated RAG API", description: "Document Q&A using Vector DBs and local LLMs. (Tests: Python, PyTorch, LLMs, AI serving)" },
            { title: "4. Polyglot ML Inference System", description: "A Spring Boot frontend API drops image processing tasks into Kafka. A separate Python GPU worker picks up tasks, runs inference, and returns results via Redis. (Tests: System Design, Polyglot Architecture, Kafka)" }
        ]
    },
    {
        title: "Interview Preparation",
        description: "Targeted practice for technical screens.",
        children: [
            { title: "Data Structures & Algorithms", description: "NeetCode 150 (Implement in Java). Focus on pattern recognition (Sliding window, Two-pointer, BFS/DFS). Note: Java Collections (Map, Set, PriorityQueue) are mandatory here." },
            { title: "ML Fundamentals Prep", description: "Whiteboard derivations of Logistic Regression, understanding L1/L2 regularization math." },
            { title: "System Design Prep", description: "Drawing architectures, capacity estimation, defending infrastructure choices." }
        ]
    }
];
