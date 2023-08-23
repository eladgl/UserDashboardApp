//App.js main app, will reload all the components needed 
import { useState } from "react";
import TopBar from "./Components/TopBar";
import UserDashboard from "./Components/UserDashboard";
import styled, { ThemeProvider } from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  gap: 20px; /* Add some space between columns */
`;

const lightTheme = {
  body: "#DEE4E7",
  font_color: "#222222",
  surface_color: "#B0BEC5",
  button_color: "#0071BC",
  button_font_color: "white",
  delete_button: "#BF0000",
  input_border_color: "black",
  label_font_color: "black",
  label_font_color_hover: "orange",
  button_font_color_hover: "orange",
  border_color : "black",
  td_hover_color: "black",
  user_card_hover_color:"#5A5F93",
  avatar_border_color:"black",
  delete_button_font_color:"#FFFFFF"
};

const darkTheme = {
  body: "#222222",         // Dark background color
  font_color: "white",    // Font color
  surface_color: "#404040",  // Dark surface color
  button_color: "#15202B", // Blue color for buttons
  button_font_color: "white", // Font color for buttons
  delete_button: "red", // Red color for delete button
  input_border_color: "#37474F",
  label_font_color: "white",
  label_font_color_hover: "yellow",
  button_font_color_hover: "yellow",
  border_color : "white",
  td_hover_color: "#181818",
  user_card_hover_color:"#282828",
  avatar_border_color:"white",
  delete_button_font_color:"#222222"
};

export default function App() {
  const [theme, setTheme] = useState(false);
  const isDarkTheme = theme !== "light";

  const handleChangeTheme = (checked) => setTheme(checked);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <AppWrapper>
        <div className="App">
          <TopBar changeTheme={handleChangeTheme}/>
          <UserDashboard />
        </div>
      </AppWrapper>  
      </ThemeProvider>
    );
}