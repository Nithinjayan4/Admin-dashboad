export const userColumns =[
    {field:"id",headerName: "ID", width: 70},
    {field: "username",headerName:"User",width:230, rendercell: (params)=>{
        return(
            <div className="cellwithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}

            </div>
        )
    }},
    {
        field:"email",
        headerName:"Email",
        width:230
    },
    {
        field:"age",
        headerName:"Age",
        width:100
    },
    {
        field:"status",
        headerName:"Status",
        width:100
    },



    
]

export const userRows =[

    {
        id:1,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_anime_141010_800x1280.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"pending"

    },
    {
        id:1,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"Active"
    },
    {
        id:1,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"pending"
    },
    {
        id:1,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"Active"
    },
    {
        id:1,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"pending"
    },
    {
        id:1,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"pending"
    },

    
]
