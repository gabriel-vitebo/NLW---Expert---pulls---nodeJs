-- CreateTable
CREATE TABLE "pollsOptions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "pollId" TEXT NOT NULL,

    CONSTRAINT "pollsOptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pollsOptions" ADD CONSTRAINT "pollsOptions_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "polls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
