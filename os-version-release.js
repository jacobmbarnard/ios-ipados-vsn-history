class OSVersionRelease {

    constructor(majVsnNm, vsnNum, rlsDate, notes) {
        this.majorVersion = majVsnNm
        this.versionNumber = vsnNum
        this.releaseDate = rlsDate
        this.notes = notes
    }

    majorVersionOSName() {
        return this.data['major-version']
    }
}

module.exports = OSVersionRelease