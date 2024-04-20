Assessmet Details : 

Make a react project from scratch.
Make a project where you need to have few components.
1. Container – which will have other components (parent component)
2. Input component – which will have the input box where the user can enter search query.
3. List of alphabets (A – Z) – this component will hold the list of alphabets from A - Z. (DON’T USE
DROPDOWN for this)
4. List component – here the list of search results will be displayed.
- Make a JSON file containing few products details (around 20 to 30) [ can use
https://fakestoreapi.com/products)
- Create a service file from where the API would be called. [ APIs should not be called from the
component directly]
- Now in the list component display the result of the of the API in table with its image [ use lazy loading
for images]
- In search input if user enters any search text list the result accordingly.
- From the list of alphabets if user selects alphabet show products in the list component starting with
alphabet only.
Note:
- Use Axios with auto timeout of 1min [ if due to any reason the API was not able to return response in 1
min stop it and show a message to user]
- Use redux / context APIs for data passing don’t use props.
- Structure the app such that UI layer, Business logic & service layer are totally different.
- Use proper coding standards.
- Create a proper readme in the project by reading which anyone can setup the project.



To accomplish this task, we need to create several components and files with specific functionalities. Here's a high-level outline :

Create Components:

ContainerComponent: Parent component holding other components.
InputComponent: Component for user input.
AlphabetListComponent: Component displaying the list of alphabets.
ListComponent: Component displaying the list of search results.

Create JSON File:
Create a JSON file containing product details fetched from the API.

Service File:
Create a service file to handle API calls using Axios. Set a timeout of 1 minute for API calls.

Redux / Context API:
Set up Redux or Context API for managing state across components.

UI Structure:
Organize UI, business logic, and service layers separately.

Search Functionality:
Implement search functionality in the InputComponent to filter results based on user input.

Alphabet Filter:
Implement functionality in the AlphabetListComponent to filter products based on selected alphabet.

README:
Create a detailed README file explaining how to set up the project, including dependencies, installation steps, and how to run the project.
Here's a basic structure of how your project directory might look:

project/
│
├── src/
│   ├── components/
│   │   ├── ContainerComponent.js
│   │   ├── InputComponent.js
│   │   ├── AlphabetListComponent.js
│   │   ├── ListComponent.js
│   ├── services/
│   │   ├── ApiService.js
│   ├── context
|   |   |---product.jsx
│   ├── data/
│   │   ├── products.json
│   ├── App.js
│   ├── index.js
├── README.md
