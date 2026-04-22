import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowOrHideAboutProject } from '../../../../store/slices/about_projectSlice'; // Укажите правильный путь
import './AboutProject.css';

const AboutProject = () => {
    const about_project = useSelector((state) => state.about_project.isShown);
    const dispatch = useDispatch();

    useEffect(() => {
        if (about_project) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [about_project]);

    if (!about_project) return null;

    return (
        <div className='modal-overlay' onClick={() => dispatch(ShowOrHideAboutProject(false))}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='modal-close' onClick={() => dispatch(ShowOrHideAboutProject(false))}>
                    ✕
                </button>
                <div className='about-text'>
                    <h1>
                        <a href="https://github.com/milltoni/airway.git" target="_blank" rel="noopener noreferrer">
                            Airway
                        </a>
                    </h1>

                    <p>Airway is an interactive tool for detailed analysis of the evolution and interconnections of programming languages. Unlike many other projects that only show high-level relationships, Airway focuses on data accuracy and deep analysis at the level of specific features.</p>

                    <h2>🔬 Detailed Inheritance Analysis</h2>
                    <p>The main feature of Airway is the ability to see <em>how</em> exactly one language influenced another. Instead of an abstract "influenced by" line, you can explore which specific features, syntactic constructs, or paradigms were inherited. This allows you to trace not just the history, but the meaningful evolution of ideas in programming.</p>

                    <h2>🗄️ Data Architecture & Quality</h2>
                    <p>The project is built around data reliability and extensibility:</p>
                    <ul>
                        <li><strong>Data Source:</strong> All information is stored in a simple, human-readable YAML document. This makes the knowledge base easy to edit and understand.</li>
                        <li><strong>Structural & Semantic Validation:</strong> When adding or updating information, the system automatically checks the correctness of the YAML files (structural validation) and the logical consistency of relationships between languages (semantic validation). This guarantees high quality and accuracy of the displayed data.</li>
                        <li><strong>Collaboration:</strong> Thanks to the widespread use of Git, anyone can propose additions or corrections via pull requests on GitHub, contributing to the continuous development and refinement of the programming language knowledge base.</li>
                    </ul>

                    <h2>🖱️ How to Interact</h2>
                    <p>The page features an interactive graph where:</p>
                    <ul>
                        <li><strong>Explore Connections:</strong> Selecting a language highlights all its connections, and you can get detailed information about each inherited aspect.</li>
                        <li><strong>Editor Mode:</strong> The interface includes an "Editor mode," allowing users to make changes to the data directly through the web interface.</li>
                    </ul>

                    <h2>💎 Summary</h2>
                    <p>While other similar projects provide a general overview, Airway offers a unique depth of analysis. It is a tool not so much for a quick glance, but for researchers, educators, and anyone who wants to understand not just "what influenced what," but <em>how</em> exactly it happened, down to specific language capabilities.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;