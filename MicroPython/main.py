"""
Created by: Caleb Andreas
Created on: Sep 2024
This program shows the temperature in Kelvin.
"""

from microbit import *

# Happy face at start.
display.clear()
display.show(Image.HAPPY)

# Display temperature when the A button is pressed.
while True:
    if button_a.is_pressed():
        finding_Temperature = round(input.temperature() + 273.15)
        display.clear()
        display.scroll("The temperature is: ")
        display.scroll(str(finding_Temperature))
        display.scroll("K.")
        display.show(Image.HAPPY)
