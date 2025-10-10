# 🧭 Project Management App – Blueprint

## 1) Build SideBar and Content components

### Sidebar

- Show a list of projects
- Have an "Add Project" button that navigates
  to form to add to the list of project
- List of projects should be navigatable to the
  project detail view

#### Content

- main content window where you will display projects
- should show fallback when there is no project to display
- fallback should have a button to navigate to the
  new project form

## 2) Project Detail components

### New Project Form

- a form to add a new project
- should have a "title", "description", & "due date" fields
- ultimately update your state in the App component with
  the new project information

### Project Detail component

- show the title and description of the project along
  with the due date of the project
- show a delete button and handle the deletion

### Tasks component

- nested in the detail view
- Show a list of tasks associated with the project
- Facilitate the adding/removal of tasks through a
  form and button respectively - Again manage your tasks state associated with each
  project, likely in the App component as well

---

## 1. Why does this project exist?

To practice and combine fundamental and advanced React concepts (Components, State, Refs, Portals, and Styling) by building a small but functional Project Management App.

## 2. What should it do? (Core Features)

- Create new projects
- Add tasks to projects
- View different projects
- Clear (complete/delete) tasks
- Delete projects

## 3. Which React concepts will it involve?

- **Components**: Structuring the UI
- **State**: Managing project/task data
- **Refs**: Handling DOM or input interactions
- **Portals**: Managing modal or overlay components
- **Styling**: TailwindCSS for layout & visuals

## 4. Where should the data live?

Local state (`useState`), Lifting State Up or Deriving state from props.

# 🧠 PROJECT PLAN

## ✅ Completed - Initialize project folder and dependencies

- Set up custom font (.ttf) and Tailwind configuration
- Configure ESLint + Prettier for consistent formatting
- Add new project button
- Centered main view when no project is selected
- Displays “No Project Selected” text and icon
- Set up custom font (.ttf) not loading in production
- Sidebar navigation

## 🚧 In Progress

- Show project list

## 🧰 FIXME:

## 🧱 Next Features

- Project creation form
- Input: project name, description, due date
- Save button to add to list
- Project view
- Display project title and tasks
- Edit and delete project options

## 🌱 Future Ideas

- Dark mode
- LocalStorage persistence
- Task priorities
- Project filtering
