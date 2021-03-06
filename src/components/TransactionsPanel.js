import React from "react";
import TransactionRow from "./TransactionRow";
import propTypes from "prop-types";

function TransactionsPanel(props) {
  const mapTransactions = props.orders.map((order, i) => {
    return (
      <TransactionRow key={i} order={order} />
    );
  });

  return (
    <div className="col-lg-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            <i className="fa fa-money fa-fw" />
            Transactions Panel
          </h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>Order #</th>
                  <th>Order Date</th>
                  <th>Order Time</th>
                  <th>Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                {mapTransactions}
              </tbody>
            </table>
          </div>
          <div className="text-right">
            <a href="#">
              View All Transactions
              <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

TransactionsPanel.propTypes = {
  orders: propTypes.array.isRequired
};

export default TransactionsPanel;
