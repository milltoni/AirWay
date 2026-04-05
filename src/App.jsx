import React from "react";
import { useSelector} from "react-redux";

import Header from "./frontend/header/header";
import BrowseField from "./frontend/main_field/browse_mode/BrowseField";
import EditorContainer from "./frontend/main_field/editor_mode/EditorContainer";

import { isEditorMode } from "./constants";

const App = () => {
    const mode = useSelector((state) => state.mode.mode)
    return (
        <div>
            <Header />
            {isEditorMode(mode) ? <EditorContainer /> : <BrowseField />}
        </div>
    );
}

export default App;