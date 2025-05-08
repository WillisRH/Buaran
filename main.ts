player.onChat("buildBuaran", function () {
    let buaranMap = [
        [0, 1, 1, 0, 2],
        [1, 0, 0, 1, 2],
        [1, 1, 1, 1, 2],
        [0, 0, 0, 1, 0]
    ]

    let startX = player.position().getValue(Axis.X)
    let startY = player.position().getValue(Axis.Y)
    let startZ = player.position().getValue(Axis.Z)

    for (let x = 0; x < buaranMap.length; x++) {
        for (let z = 0; z < buaranMap[x].length; z++) {
            let worldX = startX + x
            let worldZ = startZ + z
            let blockType = GRASS

            if (buaranMap[x][z] == 1) {
                blockType = COBBLESTONE // road
                blocks.place(blockType, positions.create(worldX, startY, worldZ))
            } else if (buaranMap[x][z] == 2) {
                // place house: a 3x3x3 oak cube
                for (let dx = 0; dx < 3; dx++) {
                    for (let dy = 0; dy < 3; dy++) {
                        for (let dz = 0; dz < 3; dz++) {
                            blocks.place(OAK_DOOR, positions.create(worldX + dx, startY + dy, worldZ + dz))
                        }
                    }
                }
            } else {
                blocks.place(blockType, positions.create(worldX, startY, worldZ))
            }
        }
    }
})
