import { keys } from "../helpers/keys"
import { localStorageName } from "../helpers/localStorage"


function setGraphVals(width, height, type) {
    if (localStorage.getItem(localStorageName.ONE_CALL)) {
        let yAxis, xAxis, xyAxis
        const data = JSON.parse(localStorage.getItem(localStorageName.ONE_CALL))
        // const timeUnixArr = filterData(data.daily, keys.DATE_TIME)

        // const weather = filterData(data.daily, keys.WEATHER)

        const returnXY = ({ dataArr, addMAx, subMin, max, min }) => {
           
            if (min === undefined) {
                //get min Value from list
                min = Math.min(...dataArr)
            }

            if (max === undefined) {
                //get max Value from list
                max = Math.max(...dataArr)
            }

            yAxis = setYAxis({ h: height, vals: dataArr, yMax: addMAx, yMin: subMin, maxVal: max, minVal: min })
            xAxis = setXAxis(dataArr, width)
            xyAxis = yAxis.map((v, i) => xAxis[i] + ',' + v)
            // console.log(xyAxis.join(' T'))
            return [xyAxis.join(' '), {'valArr': dataArr, 'yAxisArr': yAxis, 'xAxisArr': xAxis}]
        }

        switch (type) {
            case keys.TEMP:
                const temp = filterData(data.daily, keys.TEMP)
                const tempAvg = temp.map(v => roundNum((v[keys.TEMP_MAX] + v[keys.TEMP_MIN]) / 2))
                return returnXY({ dataArr: tempAvg, addMAx: 0.1, subMin: 0.1 })
            case keys.HUMIDITY:
                const humidity = filterData(data.daily, keys.HUMIDITY)
                return returnXY({ dataArr: humidity, addMAx: 0.1, subMin: 0.1, min: 0 })
            case keys.RAIN:
                const rain = filterData(data.daily, keys.RAIN)
                return returnXY({ dataArr: rain, addMAx: 0.1, subMin: 0.1, min: 0 })
            case keys.SNOW:
                const snow = filterData(data.daily, keys.SNOW)
                return returnXY({ dataArr: snow, addMAx: 0.1, subMin: 0.1, min: 0 })
            case keys.WIND_SPEED:
                const windSpeed = filterData(data.daily, keys.WIND_SPEED)
                return returnXY({ dataArr: windSpeed, addMAx: 0.1, subMin: 0.1, min: 0 })
            case keys.POP:
                const pop = filterData(data.daily, keys.POP)
                const popPCT = pop.map(v => v * 100)
                return returnXY({ dataArr: popPCT, addMAx: 0.1, subMin: 0.1, min: 0 })
            case keys.UV:
                const uv = filterData(data.daily, keys.UV)
                return returnXY({ dataArr: uv, addMAx: 0.1, subMin: 0.1, min: 0 })
            default:
                break
        }

    }
}

function roundNum(num) {
    return +(Math.round(num + 'e+2') + 'e-2')
}

function filterData(data, key) {

    return data.map(e => e[key] ? e[key] : 0)

}

function setYAxis({ vals, yMax, yMin, h, maxVal, minVal}) {
    // h -= 40
    let yAxis = []
    // if (minVal === undefined) {
    //     //get min Value from list
    //     minVal = Math.min(...vals)
    // }

    // if (maxVal === undefined) {
    //     //get max Value from list
    //     maxVal = Math.max(...vals)
    // }
    //add & subtract % to Max and from Min val
    // so that actual data is always in middle of graph 
    console.log(maxVal, minVal)
    maxVal += (maxVal * yMax)
    minVal < 0 ? minVal += (minVal * yMin) : minVal -= (minVal * yMin)
    console.log(maxVal, minVal)
    vals.forEach((v, i) => {
        // get difference between *default* highest  and lowerst value
        const diff = maxVal - minVal
        // get differnce between value and *default* hightest value
        const diffV = maxVal - v
        // get difference between diff and diffV values
        const diffFinal = diff - diffV
        // get pct
        const diffInPCT = diffFinal / diff
        // const diffInPCT = v / maxVal
        console.log(v, maxVal, minVal, diff, diffV, diffFinal, diffInPCT)
        yAxis.push((h - (h * diffInPCT)))

    })

    return yAxis
}

function setXAxis(vals, w) {
    // w -= 40
    console.log(w)
    const baseNum = w / (vals.length - 1)
    let xAxis = []
    for (let i = 0; i <= vals.length; i++) {
        xAxis = [...xAxis, baseNum * i]
    }
    return xAxis
}

export default setGraphVals