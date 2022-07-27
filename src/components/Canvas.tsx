import React, { useCallback } from "react";
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
import CanvasDefaultComponent from "./CanvasDefaultComponent";
import CanvasComponentPreFilledData from "./CanvasComponentPreFilledData";
import CanvasTabs from "./CanvasTabs";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Droppable from "./Droppable";
import { Component, Procedure, useProcedures } from "../contexts/ProcedureProvider";
import { useTemplates } from "../contexts/TemplateProvider";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import CanvasComponentUnfilledData from "./CanvasComponentUnfilledData";
import Navbar from "./Navbar";

export default function ProcedureDesign() {
  const navigate = useNavigate();
  const { procedure, resetProcedure, addComponent, deleteComponentById, selectComponent } = useProcedures();
  const { componentTemplates } = useTemplates();
  const [openDefault, setOpenDefault] = React.useState(true);

  const iconMap: { [key: string]: any } = {
    integer: <PhoneIcon />,
    string: <TextFieldsOutlinedIcon />,
    "date-time": <CalendarMonthIcon />,
    email: <MailOutlineIcon />
  };

  const handleClickDefault = () => {
    setOpenDefault(!openDefault);
  };

  const [openCustom, setOpenCustom] = React.useState(false);

  const handleClickCustom = () => {
    setOpenCustom(!openCustom);
  };

  const editComponent = useCallback(
    (id: string) => {
      selectComponent(id);
      navigate("/builder");
    },
    [navigate, selectComponent]
  );

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <Stack>
      <Navbar
        page="Procedure Canvas"
        title={procedure?.name}
        elements={
          <>
            <Button variant="text" onClick={() => navigate("/preview")}>
              Preview
            </Button>
            <Button variant="contained">Save Procedure</Button>
          </>
        }
      />
      <Grid container>
        <DragDropContext
          onDragEnd={result => {
            const { destination, source } = result;

            // item is being dragged to where it came from, do nothing
            if (
              !destination ||
              (destination.droppableId === source.droppableId && destination.index === source.index)
            ) {
              return;
            }

            let newComponents = procedure?.components ?? [];

            if (destination.droppableId === source.droppableId) {
              newComponents = reorder(newComponents, source.index, destination.index) as any[];
            } else {
              newComponents?.splice(destination.index, 0, componentTemplates[source.index]);
            }

            resetProcedure({ ...procedure, components: newComponents as any[] } as Procedure);
          }}
        >
          <Grid item xs={2.5}>
            <Box
              sx={{
                border: "0.5px solid #d3d3d3",
                height: "100%",
                backgroundColor: "#f7f9fa",
                borderRight: "2px solid #c3cfd9"
              }}
            >
              <Box>
                <Box
                  sx={{
                    marginBottom: 3,
                    mx: 0.5,
                    display: "flex",
                    justifyContent: "space-between"
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
                  justifyContent: "center"
                }}
              >
                <Box>
                  <List sx={{ width: "100%" }} component="nav" aria-labelledby="nested-list-subheader">
                    <ListItemButton onClick={handleClickDefault}>
                      <ListItemText primary="Default Components" />
                      {openDefault ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openDefault} timeout="auto" unmountOnExit>
                      <Box sx={{ my: 2 }}>
                        <Droppable droppableId="templateDroppable" direction="horizontal" isDropDisabled={true}>
                          {provided => (
                            <Box ref={provided.innerRef}>
                              {componentTemplates.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                  {provided => (
                                    <Box
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <CanvasDefaultComponent
                                        title={item.name}
                                        fields={Object.keys(item.properties).map(p => ({
                                          icon: iconMap[item.properties[p].format ?? item.properties[p].type],
                                          name: p,
                                          description: item.properties[p].format ?? item.properties[p].type
                                        }))}
                                      />
                                    </Box>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </Box>
                          )}
                        </Droppable>
                      </Box>
                    </Collapse>
                  </List>
                </Box>
                <Box>
                  <List sx={{ width: "100%" }} component="nav" aria-labelledby="nested-list-subheader">
                    <ListItemButton onClick={handleClickCustom}>
                      <ListItemText primary="Custom Components" />
                      {openCustom ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openCustom} timeout="auto" unmountOnExit>
                      <CanvasDefaultComponent
                        title={"Bike theft information"}
                        fields={[
                          {
                            icon: <PedalBikeIcon />,
                            name: "Bike last seen",
                            description: "date, time"
                          },
                          {
                            icon: <ContactPageOutlinedIcon />,
                            name: "Theft identified",
                            description: "date, time"
                          },
                          {
                            icon: <DescriptionOutlinedIcon />,
                            name: "Description",
                            description: "long paragraph"
                          },
                          {
                            icon: <LocationOnIcon />,
                            name: "Location",
                            description: "location picker"
                          }
                        ]}
                      />
                      <CanvasDefaultComponent
                        title={"Company details"}
                        fields={[
                          {
                            icon: <BusinessOutlinedIcon />,
                            name: "Basic information",
                            description: "long paragraph"
                          },
                          {
                            icon: <LocalAtmOutlinedIcon />,
                            name: "Profit data",
                            description: "number"
                          },
                          {
                            icon: <ContactPageOutlinedIcon />,
                            name: "Owner data",
                            description: "short text"
                          }
                        ]}
                      />
                    </Collapse>
                  </List>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9.5}>
            <Stack direction="row-reverse" alignItems="center" spacing={2} px={4}>
              <Button variant="contained" onClick={() => addComponent({} as Component)} sx={{ height: "fit-content" }}>
                + Add Component
              </Button>
              <Droppable droppableId="canvasDroppable" direction="horizontal">
                {provided => (
                  <Box
                    ref={provided.innerRef}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      height: "100vh",
                      overflowX: "auto",
                      alignItems: "center",
                      minWidth: "800px"
                    }}
                  >
                    {procedure?.components.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {provided => (
                          <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            {item.properties ? (
                              <CanvasComponentPreFilledData
                                id={item.id}
                                editComponent={editComponent}
                                deleteComponentById={deleteComponentById}
                                title={item.name}
                                fields={Object.keys(item.properties).map(p => ({
                                  icon: iconMap[item.properties[p].format ?? item.properties[p].type],
                                  name: p,
                                  description: item.properties[p].format ?? item.properties[p].type
                                }))}
                              />
                            ) : (
                              <CanvasComponentUnfilledData
                                id={item.id}
                                editComponent={editComponent}
                                deleteComponentById={deleteComponentById}
                              />
                            )}
                          </Box>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Stack>
          </Grid>
        </DragDropContext>
      </Grid>
    </Stack>
  );
}
