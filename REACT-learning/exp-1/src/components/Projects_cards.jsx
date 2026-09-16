import React from 'react'
import projectImg from "../assets/AI_Radio.png"

const Projects_cards = () => {
  return (
    <div className="project-card">
        <div className="upper-section">
          <div className="project-top">
            <img src={projectImg} alt="" />
          </div>
          <div className="project-center">
            <div className="center-heads">
              <h2>AI Radiologist</h2>
              <p>Automated Diagnostic Tool designed to assist in the identification of pneumonia from chest X-ray images. This project implements a high-accuracy pipeline to streamline radiological screening.
               Pneumonia Classifier: Employs a Deep Learning model to categorize chest X-rays into 'Normal' or 'Pneumonia' with high precision. Impact: Enhances diagnostic workflows by providing rapid, automated feedback to medical professionals in high-volume environments.
              </p>
            </div>
            <div className="projects-Tools-technologies">
              <h4>Python</h4>
              <h4>TensorFlow</h4>
              <h4>Keras</h4>
              <h4>CNN</h4>
              <h4>Medical Imaging</h4>
            </div>
          </div>

          <a className="github-button" href="" target="">
            <span>GitHub</span>
          </a>
        </div>
    </div>
  )
}

export default Projects_cards