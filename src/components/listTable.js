import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

class ListTable extends Component {
  render() {
    const { tableSetting, data } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            {tableSetting.map((column) => {
              return <TableCell align="center">{column.label}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.name}>
                {tableSetting.map((column) => {
                  return column.data === "sell" ? (
                    <TableCell align="center" component="th" scopo="row">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          this.props.sellHandler(item.name, item.price)
                        }
                      >
                        １つ売る
                      </Button>
                    </TableCell>
                  ) : column.data === "refill" ? (
                    <TableCell align="center" component="th" scopo="row">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.props.refillHandler}
                      >
                        １つ補充する
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell align="center" component="th" scope="row">
                      {item[column.data]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

export default ListTable;
