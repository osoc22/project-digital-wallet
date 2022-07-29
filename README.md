# Pleasant Procedures

## Introduction

This is the Pleasant Procedures / Government Procedure Builder project from Open Summer of Code 2022. Together with our partners at [BOSA](https://bosa.belgium.be/en) and [IO Digital](https://www.iodigital.com/en) we built a proof-of-concept process builder, part of the larger Digital Wallet app for Belgium.

## Table of Contents

- [Wireframes](#Wireframes)
  - [MVP](#mvp)
  - [Extended](#extended)
- [Features](#Features)
  - [Procedure Setup](#Procedure_Setup)
  - [Procedure Canvas](#Procedure_Canvas)
  - [Component Builder](#Component_Builder)
  - [Preview](#Preview)
- [Deployment](#Deployment)
  - [Requirements](#Requirements)
  - [Local](#Local)

## Wireframes

The project includes two types of wireframes: the minimum viable product (MVP) and extended wireframes.

### MVP

The MVP wireframes is what the delivered (and deployed) version are built on. Find them in the [`wireframes/mvp`](./wireframes/mvp/) directory.

### Extended

The extended wireframes is what the team envisioned for the future of the application and how it could look like in the future. Find these under the [`wireframes/extended`](./wireframes/extended/) directory.

## Features

### Procedure Setup

This is the start screen (for an example, see [pleasant-procedures.osoc.be](https://pleasant-procedures.osoc.be/)) where users will start their interaction with the application. Here, they can give the procedure a name, a category (which government department the procedure belongs to) and a description.

### Procedure Canvas

The following screen is the procedure canvas. As the name implies, it is the canvas where the procedure can be modeled visually. Components from the library on the left side can be dragged onto the canvas on the right. A procedure is made up of one or more components. Pre-made components are available to the user, but the user can also choose to create a blank component and edit it. The files associated with this part of the application are located in the `src/components` directory: `Canvas.tsx`, `CanvasComponentPreFilledData.tsx`, `CanvasComponentUnfilledData.tsx`, `CanvasDefaultComponent.tsx`, `CanvasTabs.tsx`.

### Component Builder

The component builder is the screen where the components from the procedure canvas can be edited. A component consists of one or multiple fields. The fields represent what the citizen will interact with (or what question will be asked to the citizen in the Digital Wallet app). The user of the Procedure Builder can edit the types of the fields and save the collection of fields as a component. Fields can be dragged from the left into the middle and also be dragged around to be reordered. The associated files are in the `src/components` directory: `Builder.tsx`, `BuilderMainContainer.tsx`, `Droppable.tsx`, `FieldsLibrary.tsx`, `FieldTemplates.tsx`, `FieldTemplateTextField.tsx`, `FieldTypeSelect.tsx`, `FieldTypes.tsx`, `FieldType.tsx`.

Note for the `src/Components/Droppable.tsx` file: we have created a wrapper for this React component, see [this issue](https://github.com/atlassian/react-beautiful-dnd/issues/2399). We are using [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) as the drag and drop library but the library is not being maintained anymore, as it seems. The last supported version of React.js was 16 for this library and we are using React version 18.

### Preview

The preview screen is the last screen in the flow of the application. When clicking the ‘Preview’ button in the procedure canvas, the user gets taken to the mobile view of what the citizen will see, with the correct procedure components. The file associated with this part is the `src/components/Preview.tsx` file.

## Deployment

### Requirements
- [Git](https://git-scm.com/) 
- [Node.js](https://nodejs.org/en/) (Minimal Node.js version 14, minimal npm version 5.6)

### Local

1. Clone the project
```
git clone https://github.com/osoc22/project-digital-wallet
```

2. Navigate to the folder
```
cd project-digital-wallet
```

3. Install the dependencies
```
npm install
```

4. Start the application
```
npm start
```

5. Open the shown url in your browser, by default http://localhost:3000 
