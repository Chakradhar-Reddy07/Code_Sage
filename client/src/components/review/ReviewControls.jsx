import toast from "react-hot-toast";
import Button from "../ui/Button";
import { createReview } from "../../services/review";

function ReviewControls({
  language,
  code,
  setReview,
  loading,
  setLoading,
}) {
  const handleReview = async () => {
    if (!code.trim()) {
      toast.error("Please enter some code.");
      return;
    }

    try {
      setLoading(true);

      const response = await createReview(
        language,
        code
      );

      setReview(response.review);

      toast.success("Review completed!");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Review failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 flex justify-end">

      <Button
        onClick={handleReview}
        disabled={loading}
        className="bg-gradient-to-r from-violet-600 to-blue-600"
      >
        {loading
          ? "Reviewing..."
          : "Review Code"}
      </Button>

    </div>
  );
}

export default ReviewControls;