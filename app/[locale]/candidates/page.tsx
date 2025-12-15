"use client";
import { useGetCandidatesByUserId } from "@/hooks/candidate";

const Candidates = () => {
  const candidates = useGetCandidatesByUserId();

  if (candidates === undefined) return <div>Loading...</div>;

  return (
    <ul>
      {candidates.map((c) => (
        <li key={c._id}>{c.firstName}</li>
      ))}
    </ul>
  );
};

export default Candidates;
