export function DataTable({ columns, data }) {
    return (
        <table className="w-full text-left border-collapse border border-gray-700 bg-gray-800 bg-opacity-80 text-white rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-gray-900 bg-opacity-90">
                    {columns.map((col, index) => (
                        <th key={index} className="p-2 border border-gray-700">{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border border-gray-700 hover:bg-gray-700 hover:bg-opacity-50">
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className="p-2 border border-gray-700">
                                {col.render ? col.render(row, rowIndex) : row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}