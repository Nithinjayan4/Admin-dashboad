import React from 'react'
import '../Table/table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {
  const rows =[
    {
      id:45434,
      product: "Acer Nitro 5",
      img:"https://images.wallpaperscraft.com/image/single/motivation_phrase_words_170890_1280x1280.jpg",
      customer:"John Smith",
      date:"1 Jan",
      method:"Cash on Delivery",
      amount:900,
      status:"Approved",
    },
    {
      id:12234,
      product: "Lenovo5",
      img:"https://images.wallpaperscraft.com/image/single/motivation_phrase_words_170890_1280x1280.jpg",
      customer:"Ram Smith",
      date:"1 Jan",
      method:"Online",
      amount:900,
      status:"Pending",
    },
    {
      id:168534,
      product: "Acer Nitro 5",
      img:"https://images.wallpaperscraft.com/image/single/motivation_phrase_words_170890_1280x1280.jpg",
      customer:"Sam Smith",
      date:"1 Jan",
      method:"Cash on Delivery",
      amount:900,
      status:"Approved",
    },
    {
      id:442434,
      product: "Acer Nitro 5",
      img:"https://images.wallpaperscraft.com/image/single/motivation_phrase_words_170890_1280x1280.jpg",
      customer:"joe Smith",
      date:"1 Jan",
      method:"Online",
      amount:900,
      status:"Approved",
    },
    {
      id:45545434,
      product: "Acer Nitro 5",
      img:"https://images.wallpaperscraft.com/image/single/motivation_phrase_words_170890_1280x1280.jpg",
      customer:"Doc Smith",
      date:"1 Jan",
      method:"Online",
      amount:900,
      status:"Approved",
    },
    {
      id:252434,
      product: "Acer Nitro 5",
      img:"https://images.wallpaperscraft.com/image/single/motivation_phrase_words_170890_1280x1280.jpg",
      customer:"Mani Smith",
      date:"1 Jan",
      method:"Cash on Delivery",
      amount:900,
      status:"Pending",
    },
    {
      id:55434,
      product: "Acer Nitro 5",
      img:"https://images.wallpaperscraft.com/image/single/motivation_phrase_words_170890_1280x1280.jpg",
      customer:"Nail Smith",
      date:"1 Jan",
      method:"Cash on Delivery",
      amount:900,
      status:"Pending",
    },
    


  ]
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {row.id}
              </TableCell>
              {/* <TableCell className='tableCell'>{row.id}</TableCell> */}
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'><span className={` status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables