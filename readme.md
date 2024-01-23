# Background

to discuss the implementation of MVVM in ReactNative

## Architecture comparison

### Clean Architecture

- ideally its more of a concept instead of a structured architecture
- layering concept
  - separating interactions
  - domain level
- Abstraction Layer
  - implementation functions
  - dependency functions used
- should hold information not the implementation
- https://www.youtube.com/watch?v=VmY22KuRDbk&ab_channel=WebDevCody

### MVVM Architecure

- separation of concern from the
  - presentation
  - model view logic (business logic)
  - model (api, extractors)
- state of usage of redux/valtio in a MVVM
  - https://www.reddit.com/r/xamarindevelopers/comments/ryjp6q/comment/hrph4nj/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
- references
  - https://www.perssondennis.com/articles/how-to-use-mvvm-in-react-using-hooks-and-typescript
    - The model is responsible for getting data from data sources, and serving it to the ViewModel.
    - The ViewModel in turn, uses the Model to fetch and modify the data.
  - https://tech.groww.in/apply-mvvm-in-react-native-app-ad77fa0f851b
    - ViewModel helps in providing access to the data in Model to the consumers (ViewControllers). It is just a kind of utility that can be used anywhere and is not at all worried about who consumes the data. This makes it easy to test and interact with multiple different consumers.
    - This is the data store of the application where the whole app data from multiple sources resides (Network calls, Cache, etc). It only contains the logic that updates the data in it and cannot be manipulated by View or ViewController directly.
  - https://stackoverflow.com/a/37673276
    - The Model's purpose is to represent (or model) your business domain. Therefore, business logic by definition goes in the Model, not the ViewModel.

### Store Communications

- should there be a facilitation of store communication or just need a bridge/interface to handle logic

### Links

- https://medium.com/@KodeFlap/choosing-android-architectures-mvc-mvp-mvvm-clean-architecture-and-mvi-8ad2a43f7f9b#:~:text=While%20MVC%20and%20MVP%20are,larger%20and%20more%20complex%20projects.
