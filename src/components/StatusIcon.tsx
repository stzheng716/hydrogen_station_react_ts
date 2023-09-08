interface StatusIconProp {
    stationStatus: string | null;
}

//redo the station status icons
function StatusIcon({stationStatus}: StatusIconProp): JSX.Element {

    if(stationStatus === "1") {
        return <img src="https://www.freeiconspng.com/uploads/green-circle-icon-28.png" className="w-8 h-8 rounded-full" alt="" />
    } else if(stationStatus === "2") {
        return <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/26a0.png" className="w-8 h-8" alt="" />
    } else if(stationStatus === "3") {
        return <img src="https://cdn3.iconfinder.com/data/icons/basicolor-signs-warnings/24/185_stop_unavailable-512.png" className="w-8 h-8 rounded-full" alt="" />
    } else if(stationStatus === "6") {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Circle-icons-hourglass.svg/2048px-Circle-icons-hourglass.svg.png" className="w-8 h-8 rounded-full" alt="" />
    } else return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMpDi8fuxnMrFyi7EiJ4NtQ-GaNCsz4-esA&usqp=CAU" className="w-8 h-8 rounded-full" alt="" />

}

export default StatusIcon