# mobnews

to run the project

```
npm i
npm start
```

it will run at `localhost:3000`

# เริ่ม contribute

เข้าไปดูใน /src/pages/MainPage หน้าแรกมันจะเริ่มจากตรงนี้ (ตอนนี้มีหน้าเดียว) 

มีคอมโพเน้นที่ยังไม่ได้ทำ ปั่นอยู่จ่ะ (จะเปิด issue มาบอกว่าทำอะไรอยู่ก็ได้นะ)

อยากได้อะไร create new issue เลยค่า

# เวลาเปิด PR capture screenshot ให้ดูหน่อยเน้อ จะได้รีวิวให้ได้เร็วๆค่ะ

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

asset เอาไว้ใส่รูป ใส่ฟ้อนท์

pages เอาไว้ใส่หน้าใหม่ๆ 

components เอาไว้ใส่ component to be reused

containers เอาไว้ใส่ wrapper ของคอนเท็นแต่ละช่วงต่างๆ เวลาสร้างคอนเทนเนอร์ใหม่ ใช้ className={'container'} นะคะ


# lib in this project

## CSS
https://github.com/emotion-js/emotion


## Router

we use react router (but now we have only a single page, lol) so if you wanna add more page please refer to this material

https://reactrouter.com/web/guides/quick-start
https://medium.com/@mossila/%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-react-route-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-typescript-e7dc70885122
https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b

# ถ้าส่วนไหนที่กำลัง develop อยู่

แต่ยังไม่เสร็จทั้งหมดดี สามารถใช้ component `<UnderDevelopment />` ได้นะคะ