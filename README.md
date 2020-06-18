# GitHub User Search

### Purpose

This app e-implements portion of GitHub's search feature by using the GitGub public API. This app will focus on the user search. A user can enter in the name of the user that are searching for and will receive a paginated list of results. The user can navigate easily through the results, and select their desired result. Once the result is selected, the user will be sent to the applicable GitHub user profile.

### Development Focus

- Implement `TypeScript` to add static type-checking
- Implement `useEffect` hooks to react to data changes
- Create unit tests for components using `Jest` and `React Testing Library`
- Implement pagination with `react-paginate`

### Screenshots

<div>
<img width="400" height= "230"  src="https://user-images.githubusercontent.com/54158919/85046622-ad414700-b15e-11ea-8abf-d0bc815ceb5a.png">

<img width="400" height= "230" src="https://user-images.githubusercontent.com/54158919/85046750-d6fa6e00-b15e-11ea-8c0c-eb22d9fef93d.png">

</div>

### Testing

One of my main goals was to implement testing using `jest` and `react-testing-library`. To run tests use `yarn test --watchAll`. My next goal is to reach 100% code coverage.

### Future Improvements

- Implement more testing to reach 100% test coverage
- Research mocking API request
- Refactor to use `react-query` for fetching and updating asynchronous data.

## Setup Instructions

1. Clone this repository.
2. Install dependencies with `yarn install`
3. Start app with `yarn start`
