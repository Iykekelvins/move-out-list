import dateFormat from "dateformat"

const now = new Date();

export const rooms =[
    {
        date: `${dateFormat(now, "mmm dd, yyyy")}`,
        id:"42312",
        address:"2623 Honeysuckle Rd. NW",
        room_number:"3",
        location:"Atlanta, GA",
        last_occupant:"Melissa Banks",
        uid:"89029",
        balance:"($405.90)",
        now: now.getTime()
    },
    {
        date: `${dateFormat(now, "mmm dd, yyyy")}`,
        id:"63451",
        address:"97870 Colonial Ave.",
        room_number:"2",
        location:"Decatur, GA",
        last_occupant:"Frankie Vox",
        uid:"89029",
        balance:"($405.90)",
        now: now.getTime()
    },
    {
        date: `${dateFormat(now, "mmm dd, yyyy")}`,
        id:"12342",
        address:"1882 Riverside Dr. SW",
        room_number:"6",
        location:"Atlanta, GA",
        last_occupant:"Harry Rutherford",
        uid:"89029",
        balance:"($405.90)",
        now: now.getTime()
    },
    {
        date: `${dateFormat(now, "mmm dd, yyyy")}`,
        id:"73452",
        address:"990 Garden St.",
        room_number:"4",
        location:"Decatur, GA",
        last_occupant:"Clarke Best",
        uid:"89029",
        balance:"($405.90)",
        now: now.getTime()
    },
    {
        date: `${dateFormat(now, "mmm dd, yyyy")}`,
        id:"98745",
        address:"3548 Moose Rd. NE Apt 90",
        room_number:"1",
        location:"Buckhead, GA",
        last_occupant:"Eric Van",
        uid:"89029",
        balance:"($405.90)",
        now: now.getTime()
    },
    {
        date: `${dateFormat(now, "mmm dd, yyyy")}`,
        id:"23461",
        address:"7659 Brookfield Ave.",
        room_number:"5",
        location:"Morrow, GA",
        last_occupant:"Jerry Tallah",
        uid:"89029",
        balance:"($405.90)",
        now: now.getTime()
    },
    {
        date: `${dateFormat(now, "mmm dd, yyyy")}`,
        id:"63456",
        address:"390 Washington Rd.",
        room_number:"3",
        location:"Atlanta, GA",
        last_occupant:"Olivia Darks",
        uid:"89029",
        balance:"($405.90)",
        now: now.getTime()
    },
]