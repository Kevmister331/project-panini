import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { purple, red } from '@mui/material/colors';

const IdeaGroup = (props) => {
  return (
    <div className="idea-group">
      <div className="text-group">
        <div className="idea-name">{props.name}</div>
        <div className="idea-desc">{props.desc}</div>
      </div>
      <div className="button-group">
        <Fab className="add-btn" sx={{background: "#885D4D", width: "40px", height:"40px", "min-height": "40px", "box-shadow": "none"}} aria-label="add">
          <AddIcon className="plus-svg" sx={{fill: "#FBF8EE"}}/>
        </Fab>
        <Fab className="add-btn" sx={{background: "#885D4D", width: "40px", height:"40px", "min-height": "40px", "box-shadow": "none"}} aria-label="add">
          <KeyboardArrowDownIcon className="plus-svg" sx={{fill: "#FBF8EE"}}/>
        </Fab>
      </div>
    </div>
  )
}

export default IdeaGroup