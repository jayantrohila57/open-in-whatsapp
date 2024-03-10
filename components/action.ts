"use server";

import { redirect } from "next/navigation";
export const Action = (number: string) => redirect(`https://wa.me/${number}`);
