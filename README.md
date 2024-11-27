# Role Based Access Control System

This project is a **User Management System** developed using **React.js**, designed to simplify the management of users and roles. It features a clean, table-based interface where you can effortlessly add, update, or remove users and roles. Each user record includes essential details such as **name**, **email**, **role**, and their **status (active/inactive)**. The application ensures data persistence by leveraging **localStorage**, allowing user information to remain intact even after refreshing the page. This system offers an efficient and user-friendly solution for handling basic role and user management tasks.

## Technologies Used

- **React.js** for building the user interface and managing state.
- **Tailwind CSS** for responsive, utility-first styling.
- **localStorage** for persistent data storage, ensuring user data remains across page reloads.

## Features

- **Add Users**: Easily add new users by filling out a form with their name, email, role, and profile picture. The email is validated to ensure it’s in the correct format before saving, and you can upload a profile picture from your PC.
- **Edit Users**: Modify existing user details by clicking the "Edit" button in the user table. The form pre-fills with the user's current information, allowing you to update their name, email, role, and profile picture.
- **Delete Users**: Remove users directly from the user table with a simple click. Deleted users are permanently removed from the system.
- **Profile Picture Upload**: Users can upload a profile picture from their computer, which will be displayed alongside their details.
- **Responsiveness**: The app is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices. Tables and forms automatically adjust to fit various screen sizes.

## How to Use the Project

1. **Visit the Application**:
   - Go to the website where the application is hosted. For example: [**https://rbac-system-ten.vercel.app/**]

2. **Add Users**:
   - Click the "Add User" button to open the user form. Fill out the user's **name**, **email**, **role**, and **profile picture** (upload from your computer). After completing the form, click "Save" to add the user.

3. **Edit Users**:
   - In the user table, click the "Edit" button next to any user. The form will pre-fill with the user's existing details, allowing you to modify their name, email, role, or profile picture. Save the changes once you're done.

4. **Delete Users**:
   - In the user table, click the "Delete" button next to any user to permanently remove them from the system.

5. **Manage Roles**:
   - **Add Roles**: Click the "Add Role" button to create new roles (e.g., Admin, User, Manager) and define the permissions associated with each role.
   - **Edit Roles**: Click on the "Edit" button next to a role to update its name or permissions.
   - **Delete Roles**: In the role management section, click the "Delete" button next to any role to permanently remove it from the system. Note that you cannot delete roles that are currently assigned to users. You will need to reassign or remove the users before deleting the role.
   - **Assign Roles** to Users: When adding or editing users, you can assign them specific roles (e.g., Admin, Manager) based on their responsibilities. Users will have access to resources based on their assigned role.

6. **Assign Roles to Users**:
   - When adding or editing users, you can assign them specific roles (e.g., Admin, Manager) based on their responsibilities. Users will have access to resources based on their assigned role.

7. **Responsiveness**:
   - The app is fully responsive, so it will adapt to any screen size. You can access and use the system easily on both desktop and mobile devices.

