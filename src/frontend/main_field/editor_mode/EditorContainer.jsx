import React from "react";
import { useSelector} from "react-redux";

import EditorField from "./editor_field/EditorField";
import HowToUse from "./howtouse_field/HowToUse";

const EditorContainer = () => {
    const add_info = useSelector((state) => state.add_info.isShown);
    return (
        <div>
            <HowToUse />;
            <EditorField />
        </div>
    );
}

export default EditorContainer;