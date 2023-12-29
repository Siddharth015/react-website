import React, { useState } from 'react';

const ProjectForm = ({
  projectTitle,
  projectDescription,
  onTitleChange,
  onDescriptionChange,
  onSubmit,
}) => {
  // State for handling the project description
  const [description, setDescription] = useState('');

  return (
    <div>
    <img
    src="\image1.png"  
    alt=""
    style={{
      position: 'relative',
      top: -390,
      right: -950,
      width: '350px', // Set the width as needed
      height: '350px', // Set the height as needed
    }}
  />
    <section className="project-form">
      
      <form onSubmit={onSubmit}>

        {/* Project Title */}
        <div style={{ paddingLeft:10,marginBottom: '0px',marginTop:'-400px',position: 'relative' }}>
          <input
            type="text"
            value={projectTitle}
            onChange={onTitleChange}
            placeholder="Add Project Title"
            required
            style={{
              height:'40px',
              width: '12%', // Adjust the width as needed
              padding: '10px',
              fontSize: '20px',
              borderRadius: '15px', // Set the border radius
             // Blue color border
              backgroundColor: '#2563EB', // Set text color
               color: 'white',  
               border: 'none', // Remove border        
              outline: 'none', // Remove outline
              }}
              
          />
                    <style>{`
            .project-form input::placeholder {
              color: white;
              padding: 12px;
            }
          `}</style>

        </div>

        {/* Project Description */}
        <div style={{paddingLeft:10, marginBottom: '20px' }}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add project description"
            required
            style={{ marginTop: '10px',marginBottom: '0px',
              width: '1000px', padding: '10px', fontSize: '18px', borderRadius: '5px', border: '1px solid #FFFAFA' }}
          />
       
        </div>

        {/* Other form elements */}
         <button
          type="submit"
          style={{
            padding: '9px',
            paddingLeft: '5px',
            backgroundColor: '#2563EB',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '160px', // Set the width as needed
            marginLeft:10,
            marginRight: '10px', // Add margin to separate from text inputs
            fontSize: '18px', 
            font:'Poppins'
          }}
        >
          Save and Next
        </button>
      </form>
    </section>
    </div>
  );
};

export default ProjectForm;
