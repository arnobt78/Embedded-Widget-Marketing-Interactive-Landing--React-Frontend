import { useEffect, useState } from "react";

export default function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFeedbacks() {
      setLoading(true);
      setError("");
      try {
        // Replace with your deployed nexx-widget API endpoint
        const res = await fetch(
          "https://embedded-feedback.vercel.app/api/feedback"
        );
        if (!res.ok) throw new Error("Failed to fetch feedbacks");
        const data = await res.json();
        setFeedbacks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFeedbacks();
    // Expose refresh function globally for widget to call
    window.refreshFeedbackDashboard = fetchFeedbacks;
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Feedback Dashboard</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Message</th>
              <th className="border px-2 py-1">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id}>
                <td className="border px-2 py-1">{fb.name || "-"}</td>
                <td className="border px-2 py-1">{fb.email || "-"}</td>
                <td className="border px-2 py-1">{fb.message}</td>
                <td className="border px-2 py-1">
                  {new Date(fb.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
