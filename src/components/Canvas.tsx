import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SearchInput from "./SearchInput";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CanvasDefaultComponents from "./CanvasDefaultcomponents";
import CanvasComponentPreFilledData from "./CanvasComponentPreFilledData";
import CanvasComponentUnfilledData from "./CanvasComponentUnfilledData";
import CanvasTabs from "./CanvasTabs";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactsIcon from "@mui/icons-material/Contacts";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Droppable from "./Droppable";

export default function ProcedureDesign() {
  const [openDefault, setOpenDefault] = React.useState(true);

  const [procedureComponents, setProcedureComponents] = useState([
    {
      id: "1",
      content: <CanvasComponentPreFilledData
        title={"Prefilled citizen data"}
        fields={[{
          icon: <ContactsIcon />,
          name: "Name",
          description: "short text",
        },
        {
          icon: <SwitchAccountIcon />,
          name: " Last Name",
          description: "short text",
        },
        {
          icon: <BadgeIcon />,
          name: "National registry number",
          description: "short text",
        }]}
      />
    },
    {
      id: "2",
      content: <CanvasComponentUnfilledData />
    }
  ]);

  const handleClickDefault = () => {
    setOpenDefault(!openDefault);
  };

  const [openCustom, setOpenCustom] = React.useState(true);

  const handleClickCustom = () => {
    setOpenCustom(!openCustom);
  };

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <Grid container>
      <DragDropContext onDragEnd={(result) => {
        const { destination, source, draggableId } = result;

        // item is being dragged to where it came from, do nothing
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
          return;
        }

        const orderedItems = reorder(
          procedureComponents,
          result.source.index,
          result.destination?.index ?? 0
        );

        // @ts-ignore
        setProcedureComponents(orderedItems);
      }}>
        <Grid item xs={2.5}>
          <Box
            sx={{
              border: "0.5px solid #d3d3d3",
              height: "100%",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Box>
              <Box
                sx={{
                  marginBottom: 3,
                  mx: 0.5,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <CanvasTabs />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <SearchInput />
              </Box>
            </Box>
            <Box
              sx={{
                my: 3,
                px: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box>
                <List
                  sx={{ width: "100%" }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton onClick={handleClickDefault}>
                    <ListItemText primary="Default Components" />
                    {openDefault ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openDefault} timeout="auto" unmountOnExit>
                    <Box sx={{ my: 2 }}>
                      <Droppable droppableId="canvasDefaultComponents">
                        //
                      </Droppable>
                      <CanvasDefaultComponents
                        title={"Contact Details"}
                        fields={[
                          {
                            icon: <MailOutlineIcon />,
                            name: "E-mail address",
                            description: "short text",
                          },
                          {
                            icon: <MailOutlineIcon />,
                            name: "Repeat e-mail address",
                            description: "short text",
                          },
                          {
                            icon: <PhoneIcon />,
                            name: "Phone number",
                            description: "short text",
                          },
                        ]}
                      />
                    </Box>

                    <CanvasDefaultComponents
                      title={"Date and location"}
                      fields={[
                        {
                          icon: <CalendarMonthIcon />,
                          name: "Date",
                          description: "date, time",
                        },
                        {
                          icon: <LocationOnIcon />,
                          name: "Location",
                          description: "Address",
                        },
                      ]}
                    />
                  </Collapse>
                </List>
              </Box>
              <Box>
                <List
                  sx={{ width: "100%" }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton onClick={handleClickCustom}>
                    <ListItemText primary="Custom Components" />
                    {openCustom ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openCustom} timeout="auto" unmountOnExit>
                    <CanvasDefaultComponents
                      title={"Bike theft information"}
                      fields={[
                        {
                          icon: <PedalBikeIcon />,
                          name: "Bike last seen",
                          description: "date, time",
                        },
                        {
                          icon: <ContactPageOutlinedIcon />,
                          name: "Theft identified",
                          description: "date, time",
                        },
                        {
                          icon: <DescriptionOutlinedIcon />,
                          name: "Description",
                          description: "long paragraph",
                        },
                        {
                          icon: <LocationOnIcon />,
                          name: "Location",
                          description: "location picker",
                        },
                      ]}
                    />
                    <CanvasDefaultComponents
                      title={"Company details"}
                      fields={[
                        {
                          icon: <BusinessOutlinedIcon />,
                          name: "Basic information",
                          description: "long paragraph",
                        },
                        {
                          icon: <LocalAtmOutlinedIcon />,
                          name: "Profit data",
                          description: "number",
                        },
                        {
                          icon: <ContactPageOutlinedIcon />,
                          name: "Owner data",
                          description: "short text",
                        },
                      ]}
                    />
                  </Collapse>
                </List>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9.5}>
          <Droppable droppableId="canvasDroppable" direction="horizontal">
            {(provided) => (
              <Box
                ref={provided.innerRef}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                {procedureComponents.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          borderRadius: 1,
                          border: 2,
                        }}
                        p={2}
                        m={2}
                      >
                        {item.content}
                      </Box>
                    )}
                  </Draggable>
                ))}
                <Button variant="contained">+ Add Component</Button>
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </Grid>
      </DragDropContext>
    </Grid>
  );
}
