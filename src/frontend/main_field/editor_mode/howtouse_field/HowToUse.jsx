import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowOrHideAddInfo } from '../../../../store/slices/add_infoSlice';
import './HowToUse.css';

const HowToAdd = () => {
    const add_info = useSelector((state) => state.add_info.isShown);
    const dispatch = useDispatch();

    useEffect(() => {
        if (add_info) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        }
    }, [add_info]);

    if (!add_info) return null;

    return (
        <div className='modal-overlay' onClick={() => dispatch(ShowOrHideAddInfo(false))}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <button className='modal-close' onClick={() => dispatch(ShowOrHideAddInfo(false))}>
                    ✕
                </button>
                <div style={{ maxHeight: '80vh', overflowY: 'auto', paddingRight: '1rem' }}>
                    <h2>Welcome to Editor Mode!</h2>
                    <p>Here you can contribute to the airway project.</p>

                    <h3>What can be edited?</h3>
                    <ul>
                        <li><strong>Language:</strong> top-level key with fields <code>name</code>, <code>creator</code>, <code>description</code>, <code>people</code>, <code>features</code>, <code>influenced_by</code>, <code>influenced</code>.</li>
                        <li><strong>Influence relation:</strong> fields <code>influenced_by</code> (what influenced this language) and <code>influenced</code> (what this language influenced). Can be a string or a list.</li>
                        <li><strong>Feature:</strong> an element inside <code>features</code> with required <code>description</code> and optional <code>invented</code>, <code>inspired_by</code>, <code>predated_by</code>, <code>justified_by</code>, <code>source</code>.</li>
                    </ul>

                    <h3>How to add information?</h3>
                    <p>Data is entered in <strong>YAML format</strong> directly in the editor. Each language is described in its own block. The structure is validated against a JSON schema — the editor will highlight any syntactic or logical errors.</p>

                    <h4>1. Adding a new language</h4>
                    <p>To add a new language, create a new top-level key with its identifier (usually lowercase, e.g. <code>python</code>, <code>rust</code>). Describe its properties inside:</p>
                    <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
{`language_id:
  name: Language Name      # required
  creator: Creator
  description: Brief description
  people:                  # list of people involved
    - Full Name
  features:                # block with language features
    feature_name:
      description: Feature description
      invented: true/false
      inspired_by: source_reference`}
                    </pre>
                    <p><em>Fields <code>creator</code>, <code>description</code>, <code>people</code>, <code>features</code> are optional but recommended.</em></p>

                    <h4>2. Adding influence relations</h4>
                    <p>Relations are specified with two complementary fields:</p>
                    <ul>
                        <li><code>influenced_by</code> — lists languages that influenced this one.</li>
                        <li><code>influenced</code> — lists languages influenced by this one.</li>
                    </ul>
                    <p>Both can be a single string or a list of strings.</p>
                    <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
{`kotlin:
  name: Kotlin
  influenced_by:
    - scala
    - csharp
  influenced:
    - swift`}
                    </pre>

                    <h4>3. Adding inherited features</h4>
                    <p>Inside the <code>features</code> block, each key is a feature name (e.g. <code>coroutines</code>, <code>val_var</code>). Each feature is described by an object with the following fields:</p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #ddd' }}>
                                <th style={{ textAlign: 'left', padding: '8px' }}>Field</th>
                                <th style={{ textAlign: 'left', padding: '8px' }}>Type</th>
                                <th style={{ textAlign: 'left', padding: '8px' }}>Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><code>description</code></td><td>string</td><td>Feature description (required).</td></tr>
                            <tr><td><code>invented</code></td><td>boolean</td><td>Whether the feature was invented in this language.</td></tr>
                            <tr><td><code>inspired_by</code></td><td>reference</td><td>Language or specific feature that inspired it.</td></tr>
                            <tr><td><code>predated_by</code></td><td>reference</td><td>Earlier language or feature with same concept.</td></tr>
                            <tr><td><code>justified_by</code></td><td>reference</td><td>Source justifying the connection.</td></tr>
                            <tr><td><code>source</code></td><td>string</td><td>Direct quote or URL.</td></tr>
                        </tbody>
                    </table>

                    <p><strong>Reference format:</strong></p>
                    <ul>
                        <li>Whole language: just the language id (<code>scala</code>).</li>
                        <li>Specific feature: <code>language_id.features.feature_name</code>.</li>
                    </ul>

                    <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
{`features:
  coroutines:
    description: "Lightweight threads for async programming"
    invented: true
    predated_by: csharp
  data_class:
    description: "Class for holding data with auto-generated methods"
    inspired_by: scala.features.case_class`}
                    </pre>

                    <p><strong>Important about references:</strong> References are validated — the target language or feature must exist in the database. Always use the full path for features.</p>

                    <h3>Important to know!</h3>
                    <ul>
                        <li><strong>Validation:</strong> All added data undergoes structural and semantic validation to ensure correctness and consistency.</li>
                        <li><strong>Saving changes:</strong> Edits are saved locally. To integrate them into the main database, you must create a Pull Request on GitHub. This can be done either directly in the repository or via the "Create Pull Request" button in the app header.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HowToAdd;