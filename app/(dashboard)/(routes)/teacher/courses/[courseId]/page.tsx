import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  return (
    <div>
      <p>Course Id: {params.courseId}</p>
    </div>
  );
};

export default CourseIdPage;
