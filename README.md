# Traxing

อยากให้ภาษีเราไปลงที่ไหน?

This project aims to collect the votes from Thai ppl on social media to visualize where they wish their paid tax will go to.

- Education
- Economic
- Agriculture
- Medical
- Transportation
- Technology
- Environment
- Country's Security
- Social Justice

to run the project

```
npm i
npm start
```

it will run at `localhost:3000`

# start the contribution

starting from `/src/App` there will be a router to each pages 

`/src/pages/MainPage` is the main page of the app :) 

# project structure

```
src
|
|_ assets
|
|_ pages
|
|_ components 
|
|_ containers

```

asset is for keeping photos, icons, fonts, etc

pages contains page of the app

components is for keeping the components of the app

containers is for keeping wrapper of a content section. If you are creating a new container, please use `className={'container'}`


# lib in this project

## CSS
https://github.com/emotion-js/emotion


## Router

we use react router (but now we have only a single page, lol) so if you wanna add more page please refer to this material

https://reactrouter.com/web/guides/quick-start
https://medium.com/@mossila/%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-react-route-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-typescript-e7dc70885122
https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b

# UnderDevelopment ?

you can use component `<UnderDevelopment />` as a mark of any part of screen that's underdevelopment :) 
