## Open-Source Humanoid Project
Caltech, Columbia, Berkeley, Rutgers (CCBR)

<img src="https://github.com/user-attachments/assets/38926b09-3791-4f6d-ab38-10d959024f7e" width="300" />

We are a team of students building an **open-source humanoid robot** with modular hardware. 

Our goal is to create a shared platform that lowers the barrier to humanoid robotics research and development.

### Objectives
- Develop a fully functional **bipedal humanoid** capable of walking.
- Create an **open-source platform** for modular humanoid design.
- Enable research in **robot control**, **planning**, and **hardware design**.
- Advance the state of the art in humanoid robotics for education and research.

## Currently: Breaking a Leg
We plan to start by creating the leg. Our goals for the leg are that:
- The leg can work in both quadrupedal and bipedal settings.
- Has easily swappable components—sensors, motors, etc.
- We also want a robust method to estimate the load capacity of any busts the leg would support.

The most important implication is that we want to design a standard mechanical and electrical attachment interface at our different joints (ankle, knee, hip).

### Ankle modularity
We want to support modular foot geometries:
- Flat pad, gripper toes, wheels, etc.
- Change sensors - Pressure pads, full 6-axis F/T, etc.

### Knee modularity
We also want to support modular knees which will facilitate easier transformations between bipeds and quadrupeds, only requiring a knee replacement rather than an entirely new leg.

### Current designs
We are currently exploring a belt-like actuation design where the motors are all centered around the hip joint. 

## Timeline
Our timeline is laid out below.

| Date        | Milestone |
| ----------- | --------- |
| July 2025   | Leg       |
| Summer 2025 | Quadruped |
| Fall 2025   | Centaur   |
| Spring 2026 | Biped     |

While we are currently working on the leg, we plan to integrate it first into getting a quadruped to walk by the end of summer.

Then in the fall, we plan to develop a human torso which can attach onto the quadruped, creating a "centaur" design capable of manipulation tasks using our quadrupedal base. 

By next year, we hope to integrate them all into a working humanoid.
