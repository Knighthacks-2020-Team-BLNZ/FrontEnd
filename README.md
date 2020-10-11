# FrontEnd

This is the part of ReLearn that handles all frontend parts! It uses React as it's main technology and is a web application.

## Pages Developed

The following pages are incoporated inside the frontend:

<ul>
<li>- [Landing Page]</li>
<li>- [Login]</li>
<li>- [Account Settings]</li>
<li>- [Tutor Matching]</li>
</ul>

## Motivation

Team BLNZ (creators of the ReLearn) were motivated to create a solution to the tutoring crisis we are currently undergoing. The tutoring crisis I described is that there is a plethora of tutors and more than enough students to match, but finding a compatible tutor-student match is hard. Students might end up getting overwhelmed and not getting the help they need for their education.

## Code style

<b>The parts of the page is broken in to parts:</b> Has a folder for implementation (index.js, styles.scss coupling)
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uses SASS for styling
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uses HOC props to change the state of the application (logged in e.g.)
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A funtional component is used and hooks used for any state

<b>New pages/pop-ups that displays forms:</b> Follows a semantic style and similar pattern to all forms
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Focuses on using flexboxes to organize content
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has smooth css for transitions and user feedback
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uses forms to do symatic handling of input-response

## Tech/framework used

<b>Built with</b>

<ul>
<li>- [<a href="https://reactjs.org/">React</a>] - Is the framework of this repo</li>
<li>- [<a href="https://www.npmjs.com/package/sass">SASS</a>] - Used for its nesting and better look</li>
<li>- [<a href="https://www.npmjs.com/package/react-notifications-component">React-Notification-Component</a>] - Used for interactive notifications, improving user experience</li>
<li>- [<a href="https://www.npmjs.com/package/eslint">EsLint</a>] - Used for linting the JSX and making development easier, this is not required!</li>
</ul>

## Note

This repository is made using create-react-app in node packaging manager, the source file with the connecting html file is not included in this repository. You can use the default one incorporated in CRA.

## Installation

Use CRA (create-react-app) to build the node_modules. Then install this repo (as the root directory, so the src and public folder have the same parent as node_modules).<br>Add each dependance (see Frameworks)
<br /><u><i>Commands:</i></u>

```
git clone https://github.com/Knighthacks-2020-Team-BLNZ/FrontEnd.git
npm create-react-app modules
# Transfer node_modules from 'modules' to 'Resume'
# cd to 'Resume'

# Download dependancies
npm i --save sass
npm i --save react-notifications-component
npm i --save eslint

# I broke down the dependancies but here is one command to install all

npm i --save sass react-notifications-component eslint
```
