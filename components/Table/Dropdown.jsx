import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
/**
 *
 * @param {WorkinProgress} param0
 * @returns
 */
export default function Dropdown({
  isSuccess,
  protocols,
  getSelectedProtocols,
}) {
  const [selectedProtocols, setSelectedProtocols] = React.useState([]);
  const handleChange = (event) => {
    getSelectedProtocols(event.target.value);
    setSelectedProtocols(event.target.value);
    console.log(selectedProtocols);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Protocol Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedProtocols}
          onChange={handleChange}
          input={<OutlinedInput label="Protocol Name" />}
          MenuProps={MenuProps}
        >
          {isSuccess &&
            protocols.map((protocol) => (
              <MenuItem key={protocol.id} value={protocol.id}>
                {protocol.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
