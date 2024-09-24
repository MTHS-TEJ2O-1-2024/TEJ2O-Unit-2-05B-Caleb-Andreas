/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Sep 2024
 * This program shows the temperature in Kelvin.
*/

// happy face at start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// display temperature when the a button is pressed
input.onButtonPressed(Button.A, function () {
    let findingTemperature = Math.round (input.temperature() + 273.15)
    basic.clearScreen()
    basic.showString('The temperature is: ')
    basic.showNumber(findingTemperature)
    basic.showString('K.')
    basic.showIcon(IconNames.Happy)
})
