import type { Metadata } from "next";
import DeleteAccount from "@/views/DeleteAccount";

export const metadata: Metadata = {
  title: "Delete Account | WADE",
};

export default function DeleteAccountPage() {
  return <DeleteAccount />;
}
