# Team Awtybots 5829's LED Animation Creator

## [Website](https://5829-ledanimation-creator.netlify.app/)
- Drag and drop the widget inside the builder tool
- Widgets:
    - Static: Lights up in a single color
        - First input box: duration in seconds of the lighting
        - Second input box: percentage of LEDs to light up
        - Color box: color that the LEDs will turn to
    - Ramp: Gradually turns on the LEDs
        - First input box: duration in seconds of the animation
        - Second input box: percentage of LEDs to light up
        - Color box: color that the LEDs will turn to
    - Transition: Transitions between two colors with a gradient
        - First input box: duration in seconds of the animation
        - Second input box: percentage of LEDs to light up
        - First Color box: color that the LEDs will start as
        - Second Color box: color that the LEDs will turn to
- The viewer lets you preview your LED animation
- Download your sequence of animations as a JSON file

## Code (Only Java is supported yet. You can write your own C++ file inspired from the Java one)
- Download the **LedCustomAnimations.java** file and move it inside your FRC Robot Code folder
- Create a folder named **5829LedAnimation** under the **deploy** folder
- Drag and drop your JSON animations in this folder
- In your LED Subsystem file:
    - Import the **LedCustomAnimations.java** file
    - Initialize your animations in the subsystem's constructor:
        - *exampleAnimation = new LedCustomAnimations(yourAddressableLED (AddressableLED), yourAddressableLEDBuffer (AddressableLEDBuffer), NameOfTheFileWihoutExtention (String), DelayBeforeAnimation (int), isLoop (boolean));*
    - In the periodic() method, call the animation:
        - *exampleAnimation.setAnimation()*;
