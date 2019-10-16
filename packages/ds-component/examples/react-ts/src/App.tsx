import * as dscc from '@google/dscc';
import * as React from 'react';

const Message = (message: dscc.TableFormat) => {
  return (
    <table>
      <thead>
        <tr>
          {message.tables[dscc.TableType.DEFAULT].headers.map((header, idx) => (
            <td key={`heading-${idx}`}>{header.name}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {message.tables[dscc.TableType.DEFAULT].rows.map((row, idx) => (
          <tr key={`tableRow-${idx}`}>
            {row.map((rowEntry, innerIdx) => (
              <td key={`tableRow-${idx}-value-${innerIdx}`}>{rowEntry}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface State {
  message?: dscc.TableFormat;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {message: undefined};
  }

  public componentDidMount() {
    const reactThis = this;
    dscc.subscribeToData(
      (message) => {
        reactThis.setState({message});
      },
      {transform: dscc.tableTransform}
    );
  }

  public render() {
    if (this.state.message === undefined) {
      return (
        <div>
          <h1>Waiting for Data Studio</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Message {...this.state.message} />
        </div>
      );
    }
  }
}

export default App;

// setTimeout(() => {
//   const message: dscc.Message = {
//     config: {
//       data: [
//         {
//           elements: [
//             {
//               id: 'hi',
//               label: 'hi',
//               options: {
//                 max: 1,
//                 min: 1,
//               },
//               type: dscc.ConfigDataElementType.DIMENSION,
//               value: ['field1'],
//             },
//             {
//               id: 'there',
//               label: 'there',
//               options: {
//                 max: 1,
//                 min: 1,
//               },
//               type: dscc.ConfigDataElementType.METRIC,
//               value: ['field2'],
//             },
//           ],
//           id: 'hi',
//           label: 'hi',
//         },
//       ],
//       style: [],
//       themeStyle: undefined,
//     },
//     dataResponse: {
//       tables: [
//         {
//           fields: ['field1', 'field2'],
//           id: dscc.TableType.DEFAULT,
//           rows: [['matt', 1], ['yulan', 3], ['minhaz', 5]],
//         },
//       ],
//     },
//     fields: [
//       {
//         concept: dscc.ConceptType.DIMENSION,
//         description: "A person's name.",
//         id: 'field1',
//         name: 'Name',
//         type: dscc.FieldType.TEXT,
//       },
//       {
//         concept: dscc.ConceptType.METRIC,
//         description: "A person's favorite number.",
//         id: 'field2',
//         name: 'Favorite Number',
//         type: dscc.FieldType.NUMBER,
//       },
//     ],
//     type: dscc.MessageType.RENDER,
//   };
//   window.parent.postMessage(message, '*');
// }, 1000);
