## Exercises 1.6.-1.11 Unicafe

\*Like most companies, Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

### Exercise 1.16: 

The application must display the total number of collected feedback for each category.

### Exercise 1.7: 

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

### Exercise1.8: 

Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

Remember that components should not be defined inside other components:

### Exercise1.9: 
Change your application to display statistics only once feedback has been gathered.

### Exercise.10: 
Let's continue refactoring the application. Extract the following two components:

Button for defining the buttons used for submitting feedback
Statistic for displaying a single statistic, e.g. the average score.
To be clear: the Statistic component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:

### Exercise1.11: 

Display the statistics in an HTML table.
