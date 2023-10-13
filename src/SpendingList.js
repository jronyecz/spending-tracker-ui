import { Component } from 'react';
import SpendingItem from './SpendingItem';
import Error from './Error';

class SpendingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `http://localhost:8080/api/v1/transactions`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data,
        });
      })
      .catch(error => {
        // Use local data for test
        this.setState({
          data: DATA,
          //   error: true,
        });
      });
  }

  renderItems() {
    return !this.state.error ? (
      this.state.data
        .filter(item => item.summary.includes(this.props.filterText))
        .map(item => <SpendingItem key={item.id} item={item} />)
    ) : (
      <Error />
    );
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default SpendingList;

const DATA = [
  {
    id: '34567',
    summary: 'albérlet és rezsi április',
    category: 'housing',
    sum: 175000,
    currency: 'HUF',
    paid: '2022-04-20T12:56:00Z',
  },
  {
    id: '34568',
    summary: 'reggeli szendvics',
    category: 'food',
    sum: 750,
    currency: 'HUF',
    paid: '2022-04-21T10:21:00Z',
  },
  {
    id: '34569',
    summary: 'vonaljegy Oktogontól Nyugatiba',
    category: 'travel',
    sum: 350,
    currency: 'HUF',
    paid: '2022-04-21T10:54:00Z',
  },
  {
    id: '34570',
    summary: 'vonatjegy haza',
    category: 'travel',
    sum: 1250,
    currency: 'HUF',
    paid: '2022-04-21T11:16:00Z',
  },
  {
    id: '34571',
    summary: 'ruha a megnyitóra',
    category: 'clothing',
    sum: 12000,
    currency: 'HUF',
    paid: '2022-04-22T20:26:00Z',
  },
  {
    id: '34572',
    summary: 'pizza az Oktogonnál',
    category: 'food',
    sum: 3400,
    currency: 'HUF',
    paid: '2022-04-23T10:55:00Z',
  },
  {
    id: '34573',
    summary: 'havi bérlet',
    category: 'travel',
    sum: 3450,
    currency: 'HUF',
    paid: '2022-04-24T13:28:00Z',
  },
];
