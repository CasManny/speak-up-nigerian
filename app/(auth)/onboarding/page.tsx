import AccountProfile from "@/components/AccountProfile";
import { createUser, getUserByClerkId } from "@/utils/database/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const OnboardingHomepage = async () => {
  const user = await currentUser();
  let userData = {}

  const verifyUser = await getUserByClerkId({clerkId: user?.id!.toString()})
  if (!verifyUser) {
    const newUser = await createUser({
      id: user?.id!,
      username: user?.username!,
      email: user?.emailAddresses[0].emailAddress!,
      image_url: user?.imageUrl!,
    });

    userData = {
      clerkId: user?.id!,
      username: user?.username!,
      email: user?.emailAddresses[0].emailAddress!,
      image_url: user?.imageUrl!,
    }
  }
  if (verifyUser?.onboarded!) {
    redirect("/")
  }

  
  return (
    <main className="mx-auto flex flex-col max-w-3xl px-10 py-20">
      <h1 className="font-bold text-2xl">Onboarding</h1>
      <p className="mt-2">
        Complete your profile now to use{" "}
        <span className="text-green-3">Speak</span> up 🇳🇬
      </p>

      <section className="mt-9">
        <AccountProfile user={userData} />
      </section>
    </main>
  );
};

export default OnboardingHomepage;
