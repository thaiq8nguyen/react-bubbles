import React, { useState } from "react"
import { axiosWithAuth } from '../utilities/axiosWithAuth'

const initialColor = {
  color: "",
  code: { hex: "" }
}

const ColorList = ({ colors, updateColors }) => {
  console.log(colors)
  const [editing, setEditing] = useState(false)
  const [colorToEdit, setColorToEdit] = useState(initialColor)
  const [newColor, setNewColor] = useState({
    color: '',
    hex: ''
  })
  console.log(newColor)

  const editColor = color => {
    setEditing(true)
    setColorToEdit(color)
  }

  const saveEdit = e => {
    e.preventDefault()
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth().put(`/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        console.log(res)
        setEditing(false)
        updateColors(colors.map((item) => {
          return item.id === colorToEdit.id ? colorToEdit : item
         
        }))
      })
      .catch(err => console.log(err))
  }

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth().delete(`/api/colors/${color.id}`)
      .then(res => {
        console.log(res)
        updateColors(colors.filter(item => item.id !== color.id))
      })
  }

  const addColor = () => {
    const colorObject ={
      color: newColor.color,
      code: {hex: `#${newColor.hex}`}
    }
    updateColors([...colors, colorObject])
    console.log(colorObject)
    axiosWithAuth().post('/api/colors', colorObject)
      .then(res => {
        console.log(res)
        
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation()
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
        <form onSubmit={(e) => {
          e.preventDefault()
          addColor()
          setNewColor({color:'', hex: ''})
        }}>
          <input 
              name='color'
              placeholder='New Color Name'
              value={newColor.color}
              onChange={(e) => {
                setNewColor({...newColor, [e.target.name]: e.target.value})
              }}
            />
            <input 
              name='hex'
              placeholder='Hex Code'
              value={newColor.hex}
              onChange={(e) => {
                setNewColor({...newColor, [e.target.name]: e.target.value})
              }}
            />
            <button type='submit'>Add Color</button>
        </form>
      </ul>
      
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
     
        
    </div>
  )
}

export default ColorList