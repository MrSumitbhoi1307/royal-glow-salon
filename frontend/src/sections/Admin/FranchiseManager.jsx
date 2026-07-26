import { useState } from "react";

const FranchiseManager = () => {
  const [inquiries] = useState([
    { id: 1, name: "Rahul Enterprises", city: "Pune", status: "New" },
    { id: 2, name: "Shree Ventures", city: "Nagpur", status: "In Discussion" },
  ]);

  return (
    <div className="rounded-3xl bg-[#111111] border border-[#D4AF37]/20 p-8">
      <h2 className="mb-8 text-3xl font-bold text-white">Franchise Inquiries</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#D4AF37]/20">
            <th className="py-4 text-left text-[#D4AF37]">Name</th>
            <th className="text-left text-[#D4AF37]">City</th>
            <th className="text-left text-[#D4AF37]">Status</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((item) => (
            <tr key={item.id} className="border-b border-white/10">
              <td className="py-5 text-white">{item.name}</td>
              <td className="text-gray-300">{item.city}</td>
              <td className="text-gray-300">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FranchiseManager;