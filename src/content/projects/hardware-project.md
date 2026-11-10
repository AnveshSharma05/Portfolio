---
title: Yubikey Case
category: Hardware Design
order: 4
image: /images/projects/yubikey-screenshot.png
imageAlt: Yubikey Cover
summary: "A fix to prevent the hardware security key, Yubikey, from snapping and
  breaking easily. "
role: Creator
team: Team of 1
timeline: Created in June 2023
tools: SolidWorks, Fusion 360, 3D Printing
---
## Overview

I built a Yubikey case. The Yubikey is a physical security key that plugs into office computers. Some computers don’t have spare usb-c ports so the Yubikey is attached to a ubs-c to usb adapter. This setup works fine for the most part. However, my dad noticed that this new configuration means that they snap really easily. He figured a case that could keep all the parts together and keep it from breaking would be really convenient. So I tried to build one for him. The Yubikey case is an external frame which prevents snapping of the usb-c point attached to the adaptor which is the common point of failure. 

## My approach

The case had to keep all the components together but it could not permanently keep everything together. The design also still had to be able to slide into a keychain. The settled design thus became two parts. One case on the Yubikey with holes for a keychain and fingerprint scanner, and another case for the USB adapter. The attachment method was a cantilever snap fit with a round circular button as the feature that held the snap fit. 

My first iteration was unable to lock together. The case around the Yubikey had the beam that needed to bend. However, in this iteration I did not create a gap space underneath that beam for the bending to happen. 

Second iteration, gap was created and everything fit together. 

## Results

The case lasted for over 2 years before breaking. The failure was at the cantilever with a clean shear of the beam at its base. Image in the thumbnail is actually two different iterations attached together. Though this project started a few years ago before college when I had less documentation and less engineering skill, I had over the summer started redesigning the case to better withstand more deflection cycles.

Some of the things I tested were print orientation (tradeoff between print strength and reduced supports - result was when printed in the weaker print orientation the beam broke in only a few cycles), different plastics, and redesigns to include more mass at the base of deflection.  

## What I learned

This was one of the first projects I had made where I had to interlink two 3d printed parts together and I learned a lot about measuring out parts and creating 3d prints that would fit with one another. 