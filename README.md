### Adapter Design patern example in TypeScript

A simple demonstration of the Adapter design pattern. Used for interviews and tutoring.

#### How to read the code
A good way to think about the adapter design pattern are electrical plugs and sockets. There are about 15 types of plugs, so if we by a device on our holiday and want to plug it at home we will need an Adapter. The adapter will understand the plug and will work with our socket. What often happens in software engineering is that instead of the adapter, when we get a new device, we exchange all our sockets in the entire house. Imagine that this needs to be done with every new device and now imagine we want to use different device types at the same time. We can have one type of a socket in one room and another in the second room, we may also just move around the our TV from one room into another :D. This sounds as a bad joke but most of the time, in software engineering, this is how its done :)

#### First step
When we start to build our house, we will look at the socket standards, pick one and build the house towards the standard interface. In the code example we are building a Contact form which will send an email using an external mailing service. At the begining, we need to define our Standard interface, in this case our MailerInterface.ts 

Code should always be developed towards an abstraction (interface) instead of a concrete implementation. This ensures maintainability and future proofeness of our code. If we have our standard set in stone, we know that no matter what external library we will use in the future, it will have to implement our standard.

#### Second step
We can now build our contact form. Along side the contact form, we will create a getMailer factory function. This functions return type is our Mailer interface.

##### getMailer
is responsible for retrieving the correct mailer instance. We don't know yet on what bases we will decide for a mailer library. We can come up with some crazy ideas, for instance we will use gmail for all people using chrome and yahoo for everyone who uses firefox :), we can use a global config, have a default mailer based on location etc. 

We don't know what library on which bases but we know that the factory will return an instance compatible with our application as it has to implement our standard interface.

#### Third step
We decided to use gmail as our mailer. Unfortunately gmail doesn't implement our standards. As everyone could guess, here comes our pattern application :) 

Of course we could just refactor our code and use the interface from gmail but we are not going to exchange the sockets in the wall everytime we buy a new device. Instead lets write our first adapter.

##### Gmail Adapter
Lets create a class GoogleMailer which will implement our Mailer interface. The only method in our interface is sendMail and our Adapter will have to implement it. Under the hood, the adapter is just a wrapper around the external library and the sendMail method will just call the corresponding method from gmail. 

What the adapter does is, that it knows how to work with our system and how to communicate with gmail hence it can communicate messages which both parties undertand.

##### Yahoo Adapter
With yahoo mailer, we follow the same principle, we create a class whcih implements our Mailer and have the sendMail method call the correct method from yahooos library.

### Summary

We now can anytime in the future use any type of a mailing library without worrying about huge refactors of our codebase, breaking tests, forgotten replaces of the new methods. The only thing we need to do when we introduce a new library is create an adapter and plug it into our system.

### When to use or NOT TO USE!!!
Knowing about the pattern is pretty cool, the pattern itself is simple and straightforward..or is it? 

It is important to understand what problems a pattern solves but also what complications it can bring. In my experience, I have seen this pattern abused many many times bringing a lot of work and headache to others.

We need to understand that writing an Adapter ussually isn't just forwarding 1 method. Libraries have 100s of methods and can work with different data formats, structures, property names etc. This means an adapter can get quickly complicated.

#### 2 Common mistakes
1. Using an adapter for a 3rd party library to ensure consistency and control over external dependencies.

This is the most common mistake people make, if you wrap a 3rd party library into an adapter, you need to understand that the library will most likely change over time and you will have to update your adapter every time this happens. Even keeping dependency version up to dat is hard enough so how likely it is that we will maintain our adapter.

2. Using an adapter for a single library which is unlikely to change

We wrap a library just in case. This is also a mistake and when we don't need a flexible system and we don't plan to use many libraries for teh same task we should not use an adapter. Adapter is usefull when there are N libraries doing the same thing and we want to use multiple at the same time. If it is 1 library which is solving a specific problem and we might change it in the future..then running a find and replace takes a few seconds and works pretty well and on top of it we avoided a few levels of abstraction which is always good.

### When to use an Adapter

If we look at our example, we are writing an adapter because we want to use 2 different email providers at the same time and we might want to add several others or change them in the future. We don't know at the begining which we will use or we are not certain about it hence our standard interface.

If we would know from the begining that we want to use gmail for instance, then we would not start with an adapter, an adapter would be introduce after we decided to use yahoo as well and in this case our standard interface would follow gmails api. The same goes with our electric sockets, if we know that our TV has a mathing plug, we will not by an adapter just to make sure. If our radio will be from Australia, we will buy a adapter for it, our TV will though still work as before :)
