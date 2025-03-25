<p align="center">
  <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
</p>

# 🍽️ Chef Claude

**Chef Claude** is a web application that allows users to input available ingredients, then sends the data to an AI model on Hugging Face, which returns a recipe for a dish that can be prepared using those ingredients.

## 🚀 Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/username/chef-claude.git
cd chef-claude
```

### 2. Install Dependencies
The application uses **React** with **Vite**. Before running the app, install the required packages:
```sh
npm install
```

### 3. Configure the `.env` File

To use the Hugging Face API, you need to obtain an API key:
1. Go to [Hugging Face](https://huggingface.co/).
2. Create an account (if you don’t have one).
3. Navigate to your account settings and generate an API key.
4. Use this key in the `.env` file as shown below.

Create a `.env` file based on `.env.example`:
```sh
cp .env.example .env
```
Then, add your values:
```plaintext
REACT_APP_HF_API_KEY=your_huggingface_api_key
```

### 4. Run the Application
```sh
npm run dev
```
The application will be available at `http://localhost:5174`.

## 🛠️ How It Works
1. The user enters the ingredients they have.
2. The data is sent to a Hugging Face AI model.
3. The model returns a recipe for a dish that can be prepared using the provided ingredients.
4. The user receives a detailed recipe to follow.

## 📸 Screenshot

<p align="center">
  <img src="https://github.com/user-attachments/assets/26af9d27-089f-4aa6-8ce3-1c9d1079b0a0" alt="Start Screen" width="700"/>
  <img src="https://github.com/user-attachments/assets/79256d3c-404d-455d-9e24-7e4b724ec77b" alt="Ingredients Input" width="700"/>
  <img src="https://github.com/user-attachments/assets/41a0fec6-72e2-433f-a4f6-694cb5c5c21e" alt="Recipe Recommendation" width="700"/>
</p>

## 🧩 Technologies Used
- **React** - Frontend framework
- **Vite** - Build tool for fast development
- **Hugging Face** - AI model for recipe generation

---
✨ Happy cooking with **Chef Claude**! 🍳

