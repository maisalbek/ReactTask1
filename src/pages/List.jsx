import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { todoContext } from "../contextProvider/ContextProvider";
import { margin } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function List() {
  const { getTodos, product, deleteTodo } = React.useContext(todoContext);

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {product.length > 0 ? (
        product.map((item) => (
          <Card
            sx={{ maxWidth: 345, border: "2px solid black", margin: "20px" }}
            key={item.id}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => deleteTodo(item.id)}
                size="small"
                variant="contained"
              >
                Delete
              </Button>
              <NavLink to={`/edit/${item.id}`}>
                <Button color="success" size="small" variant="contained">
                  Edit
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          Loading...
        </Typography>
      )}
    </div>
  );
}
