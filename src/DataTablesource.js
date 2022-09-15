export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
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
        id:2,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"Active"
    },
    {
        id:3,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"pending"
    },
    {
        id:4,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"Active"
    },
    {
        id:5,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"pending"
    },
    {
        id:6,
        username: "snow",
        img: "https://images.wallpaperscraft.com/image/single/girl_umbrella_rain_151317_1280x720.jpg",
        email: "something@gmail.com",
        age: 35,
        status:"passive"
    },

    
]
