serial.onDataReceived(serial.delimiters(Delimiters.CarriageReturn), function () {
    if (serial.readUntil(serial.delimiters(Delimiters.CarriageReturn)) == "temp") {
        serial.writeString("" + (input.temperature()))
        basic.showString("" + (input.temperature()))
    }
    if (serial.readUntil(serial.delimiters(Delimiters.CarriageReturn)) == "light") {
        serial.writeString("" + (input.lightLevel()))
        basic.showString("" + (input.lightLevel()))
    }
})
