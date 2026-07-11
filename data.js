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
        title: "Stage 2: Backend Systems",
        description: "Building robust, containerized data engines.",
        children: [
            { title: "Advanced Programming (Python/C++)", description: "OOP, Memory Management, Asyncio, Multithreading, GIL (Python), Smart Pointers (C++)." },
            { title: "Relational Databases (SQL)", description: "PostgreSQL, ACID properties, normalization, complex joins, B-Tree indexing, execution plans." },
            { title: "API Development", description: "RESTful principles, HTTP/TCP fundamentals, FastAPI, request validation, stateless architectures." },
            { title: "Containerization", description: "Docker, writing optimized Dockerfiles, Docker Compose, volume mapping, container networking." }
        ]
    },
    {
        title: "Stage 3: Machine Learning Fundamentals",
        description: "Solving problems with data, statistics, and traditional ML.",
        children: [
            { title: "Data Processing", description: "Pandas, NumPy, handling missing data, outlier detection, data leakage prevention." },
            { title: "Feature Engineering", description: "One-hot encoding, scaling/normalization, dimensionality reduction (PCA)." },
            { title: "Supervised & Unsupervised Learning", description: "Linear/Logistic Regression, K-Means Clustering, SVMs." },
            { title: "Tree-Based Models", description: "Decision Trees, Random Forests, Gradient Boosting (XGBoost, LightGBM)." },
            { title: "Model Evaluation", description: "Train/Test/Validation splits, K-Fold Cross Validation, Precision/Recall, ROC-AUC, F1 Score." }
        ]
    },
    {
        title: "Stage 4: Deep Learning & Applied AI",
        description: "Neural architectures and generative AI implementations.",
        children: [
            { title: "Neural Network Core", description: "Forward propagation, Backpropagation (deriving gradients), Loss functions (Cross-Entropy, MSE), Optimizers (Adam, SGD)." },
            { title: "Deep Learning Frameworks", description: "PyTorch: Tensors, Autograd, custom nn.Module, DataLoaders, GPU memory management." },
            { title: "Architectures", description: "CNNs for spatial data (ResNet), Sequence models for temporal data (RNN/LSTM)." },
            { title: "Transformers & LLMs", description: "Self-Attention mechanism, Positional Encoding, interacting with open-weight models (HuggingFace)." },
            { title: "Applied Generative AI", description: "Vector Databases (Milvus/Pinecone), Embeddings, RAG (Retrieval-Augmented Generation), Parameter-Efficient Fine-Tuning (LoRA)." }
        ]
    },
    {
        title: "Stage 5: Production, Scale & MLOps",
        description: "Deploying models and scaling systems to handle enterprise traffic.",
        children: [
            { title: "System Design Basics", description: "Monolith vs Microservices, CAP Theorem, Horizontal vs Vertical scaling, Load Balancing." },
            { title: "Asynchronous Architecture", description: "Message Queues (Kafka/RabbitMQ) for decoupling heavy ML inference from fast API responses." },
            { title: "Caching Strategies", description: "Redis, in-memory datastores, cache invalidation, reducing database load." },
            { title: "Model Serving & Optimization", description: "Exporting models to ONNX/TensorRT, serving via Triton or FastAPI, batching inference requests." },
            { title: "MLOps & CI/CD", description: "Experiment tracking (MLflow), Data versioning (DVC), GitHub Actions for automated testing and deployment, monitoring for data drift." }
        ]
    },
    {
        title: "Capstone Projects",
        description: "High-impact, end-to-end systems to prove competence.",
        children: [
            { title: "1. Custom Git CLI", description: "Build init, add, and commit from scratch. (Tests: DSA, OS, Python/C++)" },
            { title: "2. Containerized Ledger API", description: "High-concurrency banking API with Postgres. (Tests: DBs, APIs, Docker, Concurrency)" },
            { title: "3. Automated Fraud Pipeline", description: "End-to-end XGBoost model with SMOTE and MLflow. (Tests: Data Cleaning, ML, Evaluation)" },
            { title: "4. GPU-Accelerated RAG API", description: "Document Q&A using Vector DBs and local LLMs. (Tests: PyTorch, LLMs, API serving)" },
            { title: "5. Scalable ML Inference Server", description: "Async image processing with Kafka and Redis. (Tests: System Design, Queues, MLOps)" }
        ]
    },
    {
        title: "Interview Preparation",
        description: "Targeted practice for technical screens.",
        children: [
            { title: "Data Structures & Algorithms", description: "NeetCode 150, focusing on pattern recognition (Sliding window, Two-pointer, BFS/DFS)." },
            { title: "ML Fundamentals Prep", description: "Whiteboard derivations of Logistic Regression, understanding L1/L2 regularization math." },
            { title: "System Design Prep", description: "Drawing architectures, capacity estimation, defending infrastructure choices." }
        ]
    }
];
