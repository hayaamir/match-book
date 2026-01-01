import { ImageUpload, BasicDetails } from "@/components/CandidateForm";
import { Id } from "@/convex/_generated/dataModel";

const questionnaire = () => {
  const idString = "jd785bp165s95h1mc5vat8s4kh7xs4er";

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <BasicDetails candidateData={null} candidateId={null} />
      <ImageUpload candidateId={idString as Id<"candidates">} />
    </div>
  );
};

export default questionnaire;
