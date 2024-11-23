const express = require('express');
const router = express.Router();

const proj = [
  {
    id:1,
    heading:"Six Axis Robotic Manipulator(Payload 4Kg)",
    subheading:"Orangewood Lab",
    vedio:"Six_Axis_Manipulator(4kg).mp4",
    images :["6axia manipulator.png", "CAD_Model_Six_axis_manipulator.jpg", "CAD_Model_Six_axis_manipulator.jpg"],
    Tools:"SolidWorks, Fusion360,3D Print, URDF, RMD Actuators, ARSEC Actuators, DH Parameter, ROS RViz, ROS, CNC",
    description : [
      "Designed, assembled, and manufactured a six-axis manipulator using DH parameters, developing actuator iteration 2.",
      "Created URDF models for ROS Rviz and Gazebo simulations.",
      "Managed collaboration with vendors for joint link CNC manufacturing and ensured quality compliance for fabricated parts"],
  },
  {
    id: 2,
    heading:"Dual Encoder Backlash Compensate of gearbox and Actuator control",
    subheading:"Orangewood Lab",
    vedio:"Dual_Encoder.mp4",
    images :["dual_encoder_project.jpg","Dual_Encoder_Backless2.jpg" ,"Dual_Encoder_Backless3.jpg"],
    Tools:"Absolute Encoder, Planetary Gears, Harmonic Gearbox, ODrive S1, BLDC Motors, SSI, SPI, PWM, CAN Protocol",
    description : [
      "Researched and developed a hardware setup for a dual encoder project.",
      "Implemented gearbox position control using SSI and SPI communication, controlled via PWM interface.",
      "Utilized absolute encoders, BLDC motors, ODrive S1, and ODrive Pro with CAN communication."],
  },
  {
    id:3,
    heading:"Robotic finger Hand (holding capacity 2Kg)",
    subheading:"Orangewood Lab",
    vedio:"FiveFingerHand.mp4",
    images :["Robotic_Hand.jpg",],
    Tools:"Servo Actuators,ESP,Flex Sensors,C++ Programming, Python Tkinter (GUI),3D Printing, Sketch Design,Motion Planning",
    description : [
      "Designed and built a robotic hand with connected fingers using a custom mechanism.",
      "Integrated servo actuators controlled by ESP and flex sensors for haptic feedback to enable realistic finger movements",
      "Conducted research on motion planning and developed C++ code to control each finger’s movement based on servo angles.",
      "Created a graphical user interface (GUI) using Python’s Tkinter to provide intuitive control and real-time monitoring of finger movements. Developed design sketches and prototyped the hand using a 3D printer,iterating the design for improved functionality."],
  },
  {
    id:4,
    heading:"PCB Stator Motor",
    subheading:"Orangewood Lab",
    vedio:"",
    images:["pcb_motor.png"],
    Tools:"SolidWorks,KiCad,PCB Manufacturing,ESC PWM Integration,ANSYS Maxwell, Electromagnetic Simulation",
    description : [
      "∗ Research And Develop a hardware set up dual encode project",
      "Tech found: gearbox positional control by SSI And SPI communication and control PWM interface"],
  },
  {
    id:5,
    heading:"Mahindra thar (A.M.R)Mahindra thar brake pedal automate with lidar",
    subheading:"Swatt",
    vedio:"",
    images:["mahindra thar brake pedal.jpg"],
    Tools:"Velodyne LiDAR,C++,CAN Protocol,WheelOdometry,LeadScrew Mechanism,Crank Lever Mechanism,Laser Cutting,CNC",
    description : [
      "∗ Research And Develop a hardware set up dual encode project",
      "Tech found: gearbox positional control by SSI And SPI communication and control PWM interface"],
  },
  {
    id: 6,
    heading:"Three Axis Manipulator Attachment and Manipulator testing components",
    subheading:"Orangewood Lab",
    vedio:"",
    images:["forhealth.jpg"],
    Tools:"BLDC Motors,Lead Screw Mechanism,Encoders,Electromagnetic Brakes,Torque Sensors, Harmonic Gearbox,SolidWork",
    description : [
      "∗ Research And Develop a hardware set up dual encode project",
      "Tech found: gearbox positional control by SSI And SPI communication and control PWM interface",
      
    ],
  }
];


router.get('',(req, res) => {
  res.send({proj})
  console.log("request recieved");
  // proj.forEach((project, index) => {
  //   console.log(`Project ${index + 1} Images:`, project.images);
  // });
});



module.exports = router;
