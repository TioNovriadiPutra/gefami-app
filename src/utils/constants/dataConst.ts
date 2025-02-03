export const htmlHeaderlTemplate: string = `
<html>
  <head>
    <title>Data JSON</title>
    <style>
      table { width: 100%; border-collapse: collapse; }
      th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
      th { background-color: #f2f2f2; }
    </style>
  </head>
  <body>
    <h1>JSON Random</h1>
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
`;

export const htmlFooterTemplate: string = `
    </table>
  </body>
</html>
`;
