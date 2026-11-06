---
title: LymphSense
category: Design
proudest: true
order: 1
image: /images/projects/image44-1.jpg
imageAlt: "LymphSense device on our created phantom model. "
summary: "A project to detect fluid buildup under the skin. "
role: Team Lead
team: Team of 4
timeline: Fall 2025 - Spring 2026
tools: SolidWorks, MATLAB, 3D printing
---
## Overview

Placeholder text. Describe the project in two or three sentences: what you built, who it was for and what it does.

This is a project that showcases my exploration into finding a current medical need and creating a prototyped solution to detecting early stages of lymphedema before the condition becomes irreversible and difficult to manage. 

## The problem

What need or question started this project? Who has the problem, and why do the existing solutions fall short?

What started the problem:

![image.png](/images/projects/image-1.png)

![image.png](/images/projects/image-2.png)

![image.png](/images/projects/image-3.png)



![image.png](/images/projects/image-4.png)

The above project was not done by myself but in collaboration with [Dylann Palmer](https://www.linkedin.com/in/dylannpalmer/),  [Avishi Singh](https://www.linkedin.com/in/avishi-singh/), and [Allison Bechard](https://www.linkedin.com/in/allisonbechard/). 

The project above was a class project for BE 428: Device Design and Diagnostics. We explored methods to detect cancer margins rapidly and during a surgery. A successful device would mean that surgery would not have to take multiple visits saving on hospital time and ease for the patient. While further exploring the project, I considered beyond the project and looked into what patients experience after the breast surgery. **I learnt that after a breast cancer surgery, many women are at higher risk for lymphedema** (because the surgery either removes lymph nodes / damages them through irradiation -> meaning that the body has less functional lymph nodes meaning that the body can not absorb back the protein rich water that blood vessels develop as well -> meaning swelling in the area, more damage and eventual lymphedema). 

Diving deeper into the problem, I learnt that the current solutions to the problem were very expensive and were meant for hospital use.

![image.png](/images/projects/image-5.png)

 **There was no at home detector that detected lymphedema.** 

## My approach

We (This project could in no way have been done by myself and was a joint effort from me, [Turky Alhargan](https://www.linkedin.com/in/turky-alhargan/), [Yasaa Mohammad](https://www.linkedin.com/in/yasaa-mohammad-a45b48392/), and [Alex Fu](https://www.linkedin.com/in/alex-fu-bu/)) decided to tackle this project through the BMES Design-a-Thon challenge hosted by our university, Boston University. 

The first thing we did was to conduct a [literature review](https://docs.google.com/document/d/1hziHSU9XesAAKzmedLb1nPZ_Y07PKRbQ3j-00gxwR5o/edit?usp=sharing) and to create a brief [timeline](https://docs.google.com/document/d/1C9udJMpB6unJqsCCsRuqLlbxzhuG8HPorR5nF0Tgpz4/edit?usp=sharing). The literature review was us collecting as much information as we can and sharing it in person as well as each of us reading up on two research papers and sharing it with the rest of the group. We also tried to learn about the [current diagnosis technologies](https://docs.google.com/document/d/1s520o_EpFv8yQqhYFZ0W_nBeim_1dAj2XB1GSaNvHFI/edit?usp=sharing). 

After that we tried to reach out to people who knew more about lymphedema then we did. We interviewed the co-executive director of the National Lymphedema Network, Jennifer Williams, at the time. She had a physical therapy degree and was a doctor of physical therapy with 14 years of experience. She [told us](https://docs.google.com/document/d/1S48HaqVjPDBngCTa3JOSPG03nl10hIPbWQzgyCRfJ9c/edit?usp=sharing) more about how lymphedema was managed and told us about bioimpedance spectroscopy as a way to detect lymphedema.  

We continued brainstorming and met with our mentor [Dev Bhatt](https://www.linkedin.com/in/dev-bhatt-015/), to choose the concept we wanted to work with. We brought a few concepts to the meeting ([Concepts Batch 1](https://docs.google.com/document/d/16iTHeWHiSgAcyUICQ18or6XnHIarljoy8VFoumPl6p0/edit?usp=sharing), [Concepts Batch 2](https://docs.google.com/document/d/1ajFYMQmZUzt2jjoA_xxZ0UiK3aBpkJ8SB118U_D__58/edit?usp=sharing)). Eventually we settled on bioimpedance spectroscopy as our measurement tool of choice and [presented](https://docs.google.com/presentation/d/1Ja3P1NFuvf5JRdX24PkKNbpTkM88DyCODEZ0PObqOTo/edit?usp=sharing) about it in our check in. 

![image.png](/images/projects/image-6.png)

We got good feedback from the BU BMES chapter and went from ideating to building. 

My specific role on the team was designing the circuit. 

I personally used this [Instructable](https://www.instructables.com/Body-Composition-using-BIA/#discuss) as guidance. 

![image.png](/images/projects/image-8.png)

evanderslice. “Body Composition Using BIA.” Instructables, Autodesk, www.instructables.com/Body-Composition-using-BIA/

It talked about bioimpedance analysis for the detection of fat and I used their circuit diagram as a base.

Though I had taken classes on signals, used op-amps, and built 1st order high pass and low pass filters, this entire project was my first attempt at building my own circuit. 

Building the circuit was a few months long and involved a lot of testing. Below I have listed my notes on the circuit diagrams and their changes:

Circuit Design: 

![image.png](/images/projects/image-7.png)

Initial Design: This is just the circuit diagram listed on the Instructable with labels on what I understood the circuit to be doing. 

We made changes on the initial design. I noticed that in the original circuit they used a large resistor with a resistance far larger than the resistance of the skin, and that they made the assumption that the current going through the system was relatively constant (because whatever measured tissue resistance in the circuit would be much smaller than the large resistor and would thus barely change the current draw). I replaced that resistor and op-amp with a howland current pump instead which was designed to output a constant and known current. We also swapped out the Arduino supplied voltages for our op-amps with power supplies given by 9V batteries for a larger voltage range on our measurand signal. 

![image.png](/images/projects/image-10.png)



![image.png](/images/projects/image-9.png)

This was the final circuit design. 



Walk through how you tackled it: the design requirements, the concepts you considered, and the one you chose and why. This is a good place for CAD renders or sketches.

![Placeholder for a process image](/images/projects/lymphsense.svg)

## Results

What did testing show? Add numbers where you can, such as accuracy, cost, weight or time saved.

## What I learned

One or two honest takeaways about the engineering or about working on a team.