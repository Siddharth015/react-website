import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectForm from './components/ProjectForm';

function App() {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleProjectSubmit = () => {
    // Handle project submission logic here
    console.log('Project submitted:', { projectTitle, projectDescription });
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectForm
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        onTitleChange={(e) => setProjectTitle(e.target.value)}
        onDescriptionChange={(e) => setProjectDescription(e.target.value)}
        onSubmit={handleProjectSubmit}
      />
    </div>
  );
}

export default App;
